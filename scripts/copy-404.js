const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'dist', 'personal-portfolio');
const index = path.join(outDir, 'index.html');
const notFound = path.join(outDir, '404.html');

if (fs.existsSync(index)) {
  fs.copyFileSync(index, notFound);
  fs.writeFileSync(path.join(outDir, '.nojekyll'), '');
  console.log('Copied index.html to 404.html and added .nojekyll for GitHub Pages.');
} else {
  console.error('Build output not found at', outDir);
  process.exit(1);
}
