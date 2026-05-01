#!/usr/bin/env node

/**
 *  Remove All Empty Headers from Postman Collection
 * 
 * Purpose: Automatically finds and removes ALL headers with empty "key" fields
 * These are remnants from removing x-api-key and X-Reqres-Env headers
 * 
 * Usage:
 *   node remove-empty-headers.js
 */

const fs = require('fs');
const path = require('path');

const COLLECTION_PATH = path.join(__dirname, 'postman', 'reqres-api-collection.json');
const BACKUP_PATH = path.join(__dirname, 'postman', 'reqres-api-collection.backup.json');

function removeEmptyHeaders(obj, count = { removed: 0 }) {
    if (Array.isArray(obj)) {
        return obj
            .filter(item => {
                // Remove any header object where key is empty string
                if (item.key !== undefined && item.key === '') {
                    count.removed++;
                    return false;
                }
                return true;
            })
            .map(item => removeEmptyHeaders(item, count));
    } else if (obj !== null && typeof obj === 'object') {
        const cleaned = {};
        for (const key in obj) {
            cleaned[key] = removeEmptyHeaders(obj[key], count);
        }
        return cleaned;
    }
    return obj;
}

try {
    console.log('🔍 Reading collection...');
    const collectionText = fs.readFileSync(COLLECTION_PATH, 'utf8');
    const collection = JSON.parse(collectionText);

    console.log('📊 Scanning for empty headers with key: ""...');

    // Count empty headers before removal
    const countBefore = { removed: 0 };
    removeEmptyHeaders(collection, countBefore);

    console.log(`   Found: ${countBefore.removed} empty header(s)`);

    if (countBefore.removed === 0) {
        console.log('✅ No empty headers found! Collection is clean.');
        process.exit(0);
    }

    // Create backup
    console.log('💾 Creating backup...');
    fs.writeFileSync(BACKUP_PATH, collectionText);
    console.log(`✅ Backup saved to: ${path.relative(process.cwd(), BACKUP_PATH)}`);

    // Remove empty headers
    console.log('🧹 Removing empty headers...');
    const countAfter = { removed: 0 };
    const cleanedCollection = removeEmptyHeaders(collection, countAfter);

    // Save cleaned version
    console.log('💾 Saving cleaned collection...');
    fs.writeFileSync(COLLECTION_PATH, JSON.stringify(cleanedCollection, null, 4));

    console.log('\n✅ SUCCESS!');
    console.log(`   ✓ Removed ${countAfter.removed} empty header(s)`);
    console.log(`   ✓ Backup saved to: postman/reqres-api-collection.backup.json`);
    console.log(`   ✓ Collection cleaned: ${path.relative(process.cwd(), COLLECTION_PATH)}`);
    console.log('\n💡 Next steps:');
    console.log('   1. Verify: grep \'"key": ""\' postman/reqres-api-collection.json');
    console.log('   2. Commit: git add postman/ && git commit -m "fix(ci): remove empty headers"');
    console.log('   3. Push: git push origin main');

} catch (error) {
    console.error('❌ ERROR:', error.message);
    console.error('\nMake sure you are running this script from the project root directory.');
    console.error('Project structure should be:');
    console.error('  your-project/');
    console.error('  ├── postman/');
    console.error('  │   └── reqres-api-collection.json');
    console.error('  └── remove-empty-headers.js');
    process.exit(1);
}