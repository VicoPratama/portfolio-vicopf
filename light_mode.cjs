const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Fix manual hex strokes
    content = content.replace(/#f43f5e/g, 'var(--color-zpurple)');
    content = content.replace(/#2dd4bf/g, 'var(--color-zlime)');

    // Background to Light
    content = content.replace(/bg-zblack/g, 'bg-[#f4f4f5]');
    // Also change generic dark grays to light canvas or white
    content = content.replace(/bg-gray-950/g, 'bg-[#f4f4f5]');
    
    // Cards to White with Brutalist Borders and Shadows
    // If bg-zcard was used for cards, replace with white
    content = content.replace(/bg-zcard/g, 'bg-white border-[3px] border-zblack shadow-[4px_4px_0px_0px_#121212]');
    
    // Text colors
    content = content.replace(/text-white/g, 'text-zblack');
    content = content.replace(/text-gray-400/g, 'text-zblack/70');
    content = content.replace(/text-gray-300/g, 'text-zblack/80');
    content = content.replace(/text-gray-200/g, 'text-zblack/90');
    
    // Borders
    content = content.replace(/border-zgray/g, 'border-zblack');
    content = content.replace(/border-white\/10/g, 'border-zblack');
    content = content.replace(/border-white\/5/g, 'border-zblack');
    content = content.replace(/border-white\/20/g, 'border-zblack');
    
    // Hover effects
    content = content.replace(/hover:border-zpurple/g, 'hover:shadow-[4px_4px_0px_0px_var(--color-zpurple)]');
    content = content.replace(/hover:border-zlime/g, 'hover:shadow-[4px_4px_0px_0px_var(--color-zlime)]');
    
    // Make sure we don't have conflicting border classes, like border-[3px] and border.
    content = content.replace(/border border-zblack/g, 'border-[3px] border-zblack');
    
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
console.log('Done migrating to Light Mode Neo-Brutalism.');
