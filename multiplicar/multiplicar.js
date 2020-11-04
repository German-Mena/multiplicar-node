
const fs = require('fs')

let crearArchivo = (base,limite) => {
  return new Promise((resolve, rejected) => {

    if (!Number(base)) {
      rejected('La base ingresada no es un numero')
      return
      //pongo el return porque el rejected ejecuta la funcion y continua ejecutando
    }
    
    if (!Number(limite)) {
      rejected('El limite ingresado no es un numero')
      return
      //pongo el return porque el rejected ejecuta la funcion y continua ejecutando
    }

    let data = ''

    for (let i = 0; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
      if (err)
        rejected('sucedio un error')
      else
        resolve(`tabla-${base}.txt`);
    });
  })
}

let listarTabla = (base, limite) => {

  if (!Number(base)) {
    console.log('La base ingresada no es un numero')
    return
  }

  if (!Number(limite)) {
    console.log('El limite ingresado no es un numero');
    return
  }

  for (let i = 0; i <= limite; i++) {
    console.log(`${base} * ${i} = ${base * i}`);
  }
}

module.exports = {
  crearArchivo,
  listarTabla,
  //agrego mas,
  //agrego mas,
}