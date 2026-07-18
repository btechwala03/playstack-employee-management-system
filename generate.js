const fs = require('fs');
const path = require('path');
const cp = require('child_process');

let md = '# Production Debug Support – Backend Source Export\n\n';

// 1. Directory Tree
md += '## 1. Complete Project Structure\n\n`	ext\n';
try {
  md += cp.execSync('tree.com /F backend | findstr /V /C:"node_modules" /C:"dist" /C:"logs" /C:".git"').toString();
} catch (e) {}
md += '\n`\n\n';

// 2. Export Every Backend Source File
md += '## 2. Export Every Backend Source File\n\n';
function getFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      if (!['node_modules', 'dist', 'logs', '.git'].includes(file)) {
        getFiles(full, files);
      }
    } else {
      files.push(full);
    }
  }
  return files;
}

const allFiles = getFiles('./backend');
const filesToExport = allFiles.filter(f => f.endsWith('.ts') || f.endsWith('.json') || f.endsWith('.example') || f.endsWith('.js'));

for (const file of filesToExport) {
  md += '### ' + file.replace(/\\/g, '/') + '\n';
  md += '`' + (file.endsWith('.json') ? 'json' : file.endsWith('.ts') ? 'typescript' : 'text') + '\n';
  try {
    md += fs.readFileSync(file, 'utf8') + '\n';
  } catch (e) {
    md += 'Error reading file\n';
  }
  md += '`\n\n';
}

if (!fs.existsSync('./backend/.env.example')) {
  md += '### backend/.env.example\nThis file does not exist.\n\n';
}

// 3. MongoDB Startup Chain
md += '## 3. MongoDB Startup Chain\n\n';
md += 'The startup chain flows from ackend/dist/index.js -> ackend/dist/app.js -> ackend/dist/config/db.js.\n\n';
const chainFiles = ['./backend/src/index.ts', './backend/src/app.ts', './backend/src/config/db.ts'];
for (const file of chainFiles) {
  md += '### ' + file.replace(/\\/g, '/') + '\n`	ypescript\n';
  if (fs.existsSync(file)) md += fs.readFileSync(file, 'utf8') + '\n';
  else md += 'This file does not exist.\n';
  md += '`\n\n';
}

// 4. Dependency Search
md += '## 4. Dependency Search\n\n';
const searchTerms = ['mongoose', 'mongoose.connect', 'MongoClient', 'crypto', 'global.crypto', 'bcrypt', 'bcryptjs', 'dotenv', 'dotenv.config', 'process.env', 'MONGO_URI', 'MONGODB_URI', 'JWT_SECRET', 'app.listen', 'server.listen', 'createServer'];
const matches = [];
for (const file of filesToExport) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    for (const term of searchTerms) {
      if (content.includes(term)) {
        if (!matches.includes(file)) matches.push(file);
        break;
      }
    }
  } catch (e) {}
}

for (const file of matches) {
  md += '### ' + file.replace(/\\/g, '/') + '\n`	ypescript\n';
  md += fs.readFileSync(file, 'utf8') + '\n';
  md += '`\n\n';
}

// 5. Environment Configuration
md += '## 5. Environment Configuration\n\n';
const envFiles = ['./backend/src/config/env.ts', './backend/src/config/db.ts'];
for (const file of envFiles) {
  md += '### ' + file.replace(/\\/g, '/') + '\n`	ypescript\n';
  if (fs.existsSync(file)) md += fs.readFileSync(file, 'utf8') + '\n';
  else md += 'This file does not exist.\n';
  md += '`\n\n';
}

// 6. Runtime Entry Files
md += '## 6. Runtime Entry Files\n\n';
const entryFiles = ['./backend/src/index.ts', './backend/src/server.ts', './backend/src/app.ts', './backend/dist/index.js', './backend/dist/server.js'];
for (const file of entryFiles) {
  md += '### ' + file.replace(/\\/g, '/') + '\n';
  if (fs.existsSync(file)) {
    md += '`javascript\n' + fs.readFileSync(file, 'utf8') + '\n`\n\n';
  } else {
    md += 'This file does not exist.\n\n';
  }
}

// 7. Package Information
md += '## 7. Package Information\n\n';
const pkgFiles = ['./backend/package.json', './backend/package-lock.json', './backend/tsconfig.json'];
for (const file of pkgFiles) {
  md += '### ' + file.replace(/\\/g, '/') + '\n';
  if (fs.existsSync(file)) {
    md += '`json\n' + fs.readFileSync(file, 'utf8') + '\n`\n\n';
  } else {
    md += 'This file does not exist.\n\n';
  }
}

// 8. Railway Runtime Files
md += '## 8. Railway Runtime Files\n\n';
const railwayFiles = ['./backend/railway.json', './backend/Procfile', './backend/Dockerfile', './backend/docker-compose.yml'];
let anyRailwayFound = false;
for (const file of railwayFiles) {
  if (fs.existsSync(file)) {
    anyRailwayFound = true;
    md += '### ' + file.replace(/\\/g, '/') + '\n`	ext\n' + fs.readFileSync(file, 'utf8') + '\n`\n\n';
  }
}
if (!anyRailwayFound) md += 'No Railway runtime configuration files were found in this repository.\n\n';

fs.writeFileSync('BACKEND_SOURCE_EXPORT.md', md);
