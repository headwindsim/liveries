require('dotenv').config();
const fs = require('fs-extra');

const source = process.env.BUILD_DIR_NAME ? 'external/hues-a339x-vkg/' + process.env.BUILD_DIR_NAME : 'external/hues-a339x-vkg';
console.log('installManifest source is: ' + source);

const installManifest = fs.readJSONSync('./hues-a339x-vkg/out/hues-livery-a339x-sunclass-package/install.json');
installManifest.source = source;
fs.writeJSONSync('./hues-a339x-vkg/out/hues-livery-a339x-sunclass-package/install.json', installManifest);
