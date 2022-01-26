## Tarea auxiliar

### Ejercicio Modificado
realice algunos cambios sobre los parametros de las funciones para crear los archivos.

### Ejercicio original
1-Recibir por parámetros de la consola Nombre, Apellido y Edad
2-Verificar si son mayores de Edad (18 años)
3-En caso de que sean mayores de Edad, si son mayores de 45 meterlos crear un archivo de 
texto para mayores de 45 y si son menores de 45 un archivo de texto para menores de 45
5-Agregar una option ("d") que no sea obligatoria con el alias "delete" con default false
6-Crear una función en un nuevo archivo que reciba por argumentos nombre, apellido y edad que vamos a obtener de los datos pasados por consola.

 Esta función debe leer un archivo txt utilizando el método fs.readFile, pasar los datos obtenidos a un array divididos por "\n" , filtrar y devolver todos los que no incluyan el nombre, apellido y edad pasados por argumento

Crear un nuevo archivo utilizando el método fs.writeFile con los datos obtenidos del fs.readFile 

7- Hacer una verificación en el check de que en caso que la opción "d" tenga valor "true" se ejecute la función anterior