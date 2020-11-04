
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar')
const argv = require('./config/yargs').argv;

//tengo que poner el .argv despues del require porque si no, para poder usarlo tendria que hacer argv.argv

let comando = argv._[0]

switch (comando) {

  case 'crear':
    crearArchivo(argv.base,argv.limite)
      .then(archivo => console.log(`Archivo creado: ${archivo}`))
      .catch(error => console.log(error))
    break

  case 'listar':
    listarTabla(argv.base,argv.limite)
    break

  case 'borrar':
    console.log('borrar');
    break

  default:
    console.log('No se encontro el comando');
    break
}