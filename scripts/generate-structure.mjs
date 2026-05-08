#!/usr/bin/env node
/**
 * generate-structure.mjs
 *
 * Scans the main userscript file (youtube-playback-plox.user.js) for MARK comments,
 * functions, classes, and modules to generate a technical map of the code.
 *
 * It creates/updates 'docs/userscript-structure.md' with:
 * - A table of contents with line numbers (linked to source).
 * - Detailed sections for each MARK found (title links to source line).
 * - A list of functions and classes per section (each name links to its line).
 *
 * Output:
 *   - Creates/Updates 'docs/userscript-structure.md'.
 *
 * Usage:
 *   node scripts/generate-structure.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';

// Path to the source file relative to the docs/ output - used for links
const SOURCE_FILE = 'youtube-playback-plox.user.js';
const SOURCE_LINK = `../${SOURCE_FILE}`; // relative from docs/

const source = readFileSync(SOURCE_FILE, 'utf8');
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

// Generate markdown
const now = new Date().toISOString().split('T')[0];
const version = source.match(/@version\s+(.+)/)?.[1]?.trim() ?? 'unknown';

let md = `# Userscript Structure\n`;
md += `> Auto-generated on ${now} · version ${version}\n`;
md += "> **DO NOT EDIT MANUALLY** - regenerate with `node ./scripts/generate-structure.mjs`\n\n";
md += `---\n\n`;
md += `## Sections index\n\n`;

marks.forEach((mark, i) => {
    const anchor = mark.label.toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
    // TOC entry links both to the section anchor AND to the source line
    md += `${i + 1}. [${mark.label}](#${anchor}) - [line ${mark.line}](${SOURCE_LINK}#L${mark.line})\n`;
});

md += `\n---\n\n`;

marks.forEach(mark => {
    md += `## [${mark.label}](${SOURCE_LINK}#L${mark.line})\n`;
    md += `> [Line ${mark.line}](${SOURCE_LINK}#L${mark.line})\n\n`;

    if (mark.functions.length > 0) {
        md += `| Type | Name | Line |\n`;
        md += `|---|---|---|\n`;
        mark.functions.forEach(f => {
            // function name and line number are both links to the source line
            md += `| \`${f.type}\` | [\`${f.name}\`](${SOURCE_LINK}#L${f.line}) | [${f.line}](${SOURCE_LINK}#L${f.line}) |\n`;
        });
    } else {
        md += `_No relevant functions or constants detected._\n`;
    }
    md += `\n`;
});

writeFileSync('docs/userscript-structure.md', md);
console.log(`✅ userscript-structure.md generated (${marks.length} sections)`);