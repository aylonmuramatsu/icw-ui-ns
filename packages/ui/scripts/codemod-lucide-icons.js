/*
  Codemod: Remove size from props and width/height/style from <svg> in lucide-icons
*/

import fs from 'fs';
import path from 'path';

const ROOT_DIR = path.resolve(
  process.cwd(),
  'packages/ui/src/components/lucide-icons'
);

function getAllTsxFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getAllTsxFiles(fullPath));
    } else if (entry.isFile() && fullPath.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  return files;
}

function transform(content) {
  let next = content;

  // 1) Remove size from destructuring if present in the common pattern
  //    const { size = 24, color = 'currentColor', class: className = '' } = context;
  next = next.replace(
    /const\s*\{\s*size\s*=\s*24,\s*color\s*=\s*'currentColor',\s*class:\s*className\s*=\s*''\s*\}\s*=\s*context;?/g,
    "const { color = 'currentColor', class: className = '' } = context;"
  );

  // Also handle potential minor spacing variations (be tolerant)
  next = next.replace(/const\s*\{([^}]*)\}\s*=\s*context;?/g, (full, inner) => {
    if (!/size\s*=\s*24/.test(inner)) return full; // nothing to do
    // Remove the size=24, token safely
    const cleaned = inner
      .replace(/\bsize\s*=\s*24\s*,\s*/g, '')
      .replace(/\s*,\s*size\s*=\s*24\b/g, '')
      .replace(/\bsize\s*=\s*24\b/g, '');
    return `const {${cleaned}} = context;`;
  });

  // 2) Remove width={size} and height={size} lines (attributes placed each on its own line)
  next = next.replace(/^[\t ]*width=\{size\}[\t ]*\n/gm, '');
  next = next.replace(/^[\t ]*height=\{size\}[\t ]*\n/gm, '');

  // 3) Remove style={{ color: color }} line
  next = next.replace(
    /^[\t ]*style=\{\{\s*color:\s*color\s*\}\}[\t ]*\n/gm,
    ''
  );

  return next;
}

function run() {
  const files = getAllTsxFiles(ROOT_DIR);
  let changed = 0;
  for (const file of files) {
    const original = fs.readFileSync(file, 'utf8');
    const updated = transform(original);
    if (updated !== original) {
      fs.writeFileSync(file, updated);
      changed++;
    }
  }
  console.log(`Codemod completed. Files changed: ${changed}/${files.length}`);
}

run();



