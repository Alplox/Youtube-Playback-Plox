#!/usr/bin/env node
/**
 * generate-structure.mjs
 *
 * Scans the main userscript file (youtube-playback-plox.user.js) for MARK comments,
 * functions, classes, and modules to generate a technical map of the code.
 *
 * It creates/updates 'docs/userscript-structure.md' with:
 * - A table of contents with line numbers.
 * - Detailed sections for each MARK found.
 * - A list of functions and classes per section.
 *
 * Output:
 *   - Creates/Updates 'docs/userscript-structure.md'.
 *
 * Usage:
 *   node scripts/generate-structure.mjs
 */

import { readFileSync, writeFileSync } from 'node:fs';

const source = readFileSync('youtube-playback-plox.user.js', 'utf8');
const lines = source.split('\n');

const marks = [];
let currentMark = null;
let lineNum = 0;

for (const line of lines) {
    lineNum++;
    const markMatch = line.match(/\/\/\s*MARK:\s*(.+)/);
    if (markMatch) {
        if (currentMark) marks.push(currentMark);
        currentMark = {
            label: markMatch[1].trim(),
            line: lineNum,
            functions: []
        };
        continue;
    }

    if (!currentMark) continue;

    // Capturar funciones/clases/const relevantes
    const fnMatch = line.match(
        /^(?:async\s+)?function\s+(\w+)|^\s*(?:const|let)\s+(\w+)\s*=\s*(?:async\s+)?\(|^\s*(?:const|let)\s+(\w+)\s*=\s*\(\s*\)\s*=>/
    );
    const classMatch = line.match(/^class\s+(\w+)/);
    const arrowObjMatch = line.match(/^\s*(?:const|let)\s+(\w+)\s*=\s*Object\.freeze\(|^\s*(?:const|let)\s+(\w+)\s*=\s*\(\(\)\s*=>/);

    if (fnMatch) {
        const name = fnMatch[1] || fnMatch[2] || fnMatch[3];
        if (name) currentMark.functions.push({ type: 'fn', name, line: lineNum });
    }
    if (classMatch) {
        currentMark.functions.push({ type: 'class', name: classMatch[1], line: lineNum });
    }
    if (arrowObjMatch) {
        const name = arrowObjMatch[1] || arrowObjMatch[2];
        if (name) currentMark.functions.push({ type: 'module', name, line: lineNum });
    }
}

if (currentMark) marks.push(currentMark);

// Generar markdown
const now = new Date().toISOString().split('T')[0];
const version = source.match(/@version\s+(.+)/)?.[1]?.trim() ?? 'unknown';

let md = `# Userscript Structure\n`;
md += `> Auto-generado el ${now} · versión ${version}\n`;
md += "> **NO editar manualmente** — regenerar con `node ./scripts/generate-structure.mjs`\n\n";
md += `---\n\n`;
md += `## Índice de secciones\n\n`;

marks.forEach((mark, i) => {
    const anchor = mark.label.toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
    md += `${i + 1}. [${mark.label}](#${anchor}) — línea ${mark.line}\n`;
});

md += `\n---\n\n`;

marks.forEach(mark => {
    md += `## ${mark.label}\n`;
    md += `> Línea ${mark.line}\n\n`;
    if (mark.functions.length > 0) {
        md += `| Tipo | Nombre | Línea |\n`;
        md += `|---|---|---|\n`;
        mark.functions.forEach(f => {
            md += `| \`${f.type}\` | \`${f.name}\` | ${f.line} |\n`;
        });
    } else {
        md += `_Sin funciones o constantes relevantes detectadas._\n`;
    }
    md += `\n`;
});

writeFileSync('docs/userscript-structure.md', md);
console.log(`✅ userscript-structure.md generado (${marks.length} secciones)`);