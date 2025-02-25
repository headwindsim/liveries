const fragmenter = require('@flybywiresim/fragmenter');
const fs = require('fs');

const execute = async () => {
    try {
        const result = await fragmenter.pack({
            packOptions: { splitFileSize: 102_760_448, keepCompleteModulesAfterSplit: false },
            version: require('./fragmenter_version').version,
            baseDir: './hues-a339x-cfg/out/hues-livery-a339x-condor-package',
            outDir: './hues-a339x-cfg/out/build-modules',
            modules: [{
                name: 'D-ANRC',
                sourceDir: './SimObjects/Airplanes/HWD-A339_CFG_ANRC'
            }, {
                name: 'D-ANRL',
                sourceDir: './SimObjects/Airplanes/HWD-A339_CFG_ANRL'
            }, {
                name: 'D-ANRM',
                sourceDir: './SimObjects/Airplanes/HWD-A339_CFG_ANRM'
            }, {
                name: 'D-ANRT',
                sourceDir: './SimObjects/Airplanes/HWD-A339_CFG_ANRT'
            }]
        });
        console.log(result);
        console.log(fs.readFileSync('./hues-a339x-cfg/out/build-modules/modules.json').toString());
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
};

execute();
