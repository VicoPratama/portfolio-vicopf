const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    content = content.replace(/bg-\[#0a0a0a\]/g, 'bg-zblack');
    content = content.replace(/bg-\[#111111\]/g, 'bg-zcard');
    
    // Replace teals
    content = content.replace(/teal-400/g, 'zlime');
    content = content.replace(/teal-500/g, 'zlime');
    content = content.replace(/teal-300/g, 'zlime');
    content = content.replace(/bg-teal-400\/10/g, 'bg-zlime/10');
    content = content.replace(/border-teal-400\/20/g, 'border-zlime/20');
    content = content.replace(/hover:border-teal-500/g, 'hover:border-zlime');
    content = content.replace(/text-teal-950/g, 'text-zblack/70');
    
    // Replace pinks
    content = content.replace(/pink-500/g, 'zpurple');
    content = content.replace(/pink-400/g, 'zpurple');
    content = content.replace(/pink-300/g, 'zpurple');
    content = content.replace(/hover:border-pink-500/g, 'hover:border-zpurple');
    content = content.replace(/text-pink-100/g, 'text-zblack/70');
    
    // Replace grays and whites for borders/bgs
    content = content.replace(/border-white\/10/g, 'border-zgray');
    content = content.replace(/border-white\/5/g, 'border-zgray');
    content = content.replace(/bg-white\/5/g, 'bg-zcard');
    
    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${path.basename(filePath)}`);
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.css')) {
            replaceInFile(fullPath);
        }
    }
}

walkDir(srcDir);
console.log('Done replacing colors.');
