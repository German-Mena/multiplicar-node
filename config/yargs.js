
const opt = {
  base: {
    demand: true,
    alias: 'b'
  },
  limite: {
    default: 10,
    alias: 'l'
  }
}

const argv = require('yargs')
  .command('listar', 'imprime la tabla de multiplicar en pantalla',opt)
  .command('crear', 'Crea una tabla de multiplicar con la base y el limite ingresado',opt)
  .argv;

module.exports = {
  argv
}

//El module.exports siempre debe exportar un unico OBJETO