const fs = require('fs');

const grabarArchivo = (archivo, persona) => {
  const datos = `Nombre: ${persona.nombre} Apellido: ${persona.apellido} Edad: ${persona.edad}\n`;
  fs.appendFile(archivo, datos, 'utf8', (err) => {
    if (err) console.log(`Error al grabar el archivo. ${err.message}`.red);
    console.log(`Se agrego un nuevo registro al archivo ${archivo}`.green);
  });
};

const eliminarRegistro = (archivo, persona) => {
  const reg = `Nombre: ${persona.nombre} Apellido: ${persona.apellido} Edad: ${persona.edad}`;
  fs.readFile(archivo, (err, data) => {
    const registros = String(data).split('\n');
    const nuevosRegistros = registros.filter((e) => !e.includes(reg));
    if (nuevosRegistros.length != registros.length) {
      const datos = nuevosRegistros.join('\n');
      fs.writeFile(archivo, datos, 'utf8', (err) => {
        if (err) console.log(`Error al grabar el archivo. ${err.message}`.red);
        console.log(`Se actualizó el archivo ${archivo}!!!`.yellow);
      });
    } else { console.log(`No se realizo ninguna accion sobre el archivo ${archivo}`.grey); }
  });
};

module.exports = {
  grabarArchivo,
  eliminarRegistro,
};
