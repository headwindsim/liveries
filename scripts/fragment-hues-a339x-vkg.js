const fragmenter = require('@flybywiresim/fragmenter');
const fs = require('fs');

const execute = async () => {
    try {
        const result = await fragmenter.pack({
            packOptions: { splitFileSize: 102_760_448, keepCompleteModulesAfterSplit: false },
            version: require('./fragmenter_version').version,
            baseDir: './hues-a339x-vkg/out/hues-livery-a339x-sunclass-package',
            outDir: './hues-a339x-vkg/out/build-modules',
            modules: [{
                name: 'OY-VKO',
                sourceDir: './SimObjects/Airplanes/HWD-A339_OY-VKO'
            }, {
                name: 'OY-VKP',
                sourceDir: './SimObjects/Airplanes/HWD-A339_OY-VKP'
            }]
        });
        console.log(result);
        console.log(fs.readFileSync('./hues-a339x-vkg/out/build-modules/modules.json').toString());
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
};

execute();
