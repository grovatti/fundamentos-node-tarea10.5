require('colors');
const { argv } = require('./config/yargs');
const { grabarArchivo, eliminarRegistro } = require('./archivos/archivo');

const persona = {
  nombre: argv.nombre,
  apellido: argv.apellido,
  edad: argv.edad,
};

const nombreArchivo = persona.edad >= 45 ? 'mayores45.txt' : 'menores45.txt';

// eslint-disable-next-line max-len
if (!argv.delete) { grabarArchivo(nombreArchivo, persona); } else { eliminarRegistro(nombreArchivo, persona); }