const fragmenter = require('@flybywiresim/fragmenter');
const fs = require('fs');

const execute = async () => {
    try {
        const result = await fragmenter.pack({
            packOptions: { splitFileSize: 102_760_448, keepCompleteModulesAfterSplit: false },
            version: require('./fragmenter_version').version,
            baseDir: './hues-a339x-vir/out/hues-livery-a339x-virgin-package',
            outDir: './hues-a339x-vir/out/build-modules',
            modules: [{
                name: 'G-VEII',
                sourceDir: './SimObjects/Airplanes/HWD-A339_G-VEII'
            }, {
                name: 'G-VJAZ',
                sourceDir: './SimObjects/Airplanes/HWD-A339_G-VJAZ'
            }, {
                name: 'G-VLDY',
                sourceDir: './SimObjects/Airplanes/HWD-A339_G-VLDY'
            }, {
                name: 'G-VSRB',
                sourceDir: './SimObjects/Airplanes/HWD-A339_G-VSRB'
            }, {
                name: 'G-VTOM',
                sourceDir: './SimObjects/Airplanes/HWD-A339_G-VTOM'
            }]
        });
        console.log(result);
        console.log(fs.readFileSync('./hues-a339x-vir/out/build-modules/modules.json').toString());
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
};

execute();
