
const {crearArchivo} = require('./multiplicar/multiplicar');

// siempre que ponga const, let o var y despues { }, estoy haciendo una destructuracion

let parametro = process.argv[2]
//process es un objeto que se crea de forma automatica
// .argv es donde caen todos los parametros que se le pasan a la app de node, a partir de [2]

let base = parametro.split('=')[1]
// con split convierto un string en un arreglo, a partir de lo que le paso por parametro
// luego me quedo con el elemento que ocupa la posicion 2 del arreglo, el numero

crearArchivo(base)
  .then (archivo => console.log(`Archivo creado: ${archivo}`)) 
  .catch(error => console.log(error))

  //siempre los then y catch reciben una respuesta y la muestro a traves de arrow functions 
