const fs = require('fs')

function escribir () {
  // fs.writeFile(nombre_archivo, contenido, codificacion, callback)
  const productos = `carne\nhuevo\npan\nbebida\nhelado`
  
  fs.writeFile('compra.txt', productos, 'utf8', function() {
    console.log('Archivo escrito correctamente');
    setTimeout(function(){
      leer();
    }, 2000)
  })

}

function leer () {
  // fs.readFile(nombre_archivo, codificacion, callback(error, datos))
  fs.readFile('./compra.txt', 'utf8', function(err, datos) {
    console.log(datos);
    setTimeout(function(){
      renombrar();
    }, 2000)
  })

}

function renombrar () {
  fs.rename('compra.txt', 'compraDiaria.txt', function() {
    console.log('Archivo renombrado');
    setTimeout(function(){
      eliminar();
    }, 2000)
  })
}

function eliminar () {
  fs.unlink('compraDiaria.txt', function() {
    console.log('Archivo eliminado');
  })
}

escribir();
