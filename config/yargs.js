const argv = require('yargs')
    .option('nombre', {
        alias: 'n',
        description: 'Nombre',
        demandOption: true
    })
    .option('apellido', {
        alias: 'a',
        description: 'Apellido',
        demandOption: true
    })
    .option('edad', {
        alias: 'e',
        description: 'Edad',
        demandOption: true,
        type: 'number'
    })
    .option('delete', {
        alias: 'd',
        description: 'Elimina el registro del archivo por rango de edad',
        demandOption: true,
        type: 'boolean',
        default: false
    })
    .check((argv) => {
        if (isNaN(argv.edad) || argv.edad < 18) {
            throw Error('La edad debe ser un valor numérico mayor/igual a 18');}
        return true;
    })
    .argv

module.exports = { argv }