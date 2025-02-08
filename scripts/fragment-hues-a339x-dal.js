const fragmenter = require('@flybywiresim/fragmenter');
const fs = require('fs');

const execute = async () => {
    try {
        const result = await fragmenter.pack({
            packOptions: { splitFileSize: 102_760_448, keepCompleteModulesAfterSplit: false },
            version: require('./fragmenter_version').version,
            baseDir: './hues-a339x-dal/out/hues-livery-a339x-delta-package',
            outDir: './hues-a339x-dal/out/build-modules',
            modules: [{
                name: 'DAL3404',
                sourceDir: './SimObjects/Airplanes/HWD-A339_DAL3404'
            }, {
                name: 'DAL3408',
                sourceDir: './SimObjects/Airplanes/HWD-A339_DAL3408'
            }, {
                name: 'DAL3411',
                sourceDir: './SimObjects/Airplanes/HWD-A339_DAL3411'
            }, {
                name: 'DAL3414',
                sourceDir: './SimObjects/Airplanes/HWD-A339_DAL3414'
            }, {
                name: 'DAL3426',
                sourceDir: './SimObjects/Airplanes/HWD-A339_DAL3426'
            }]
        });
        console.log(result);
        console.log(fs.readFileSync('./hues-a339x-dal/out/build-modules/modules.json').toString());
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
};

execute();
