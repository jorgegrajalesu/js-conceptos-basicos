// funciones
/**
 * funciones tradicional function
 */

function primerNombre(){
    console.log('Jorge');
}

// llamar funcion
primerNombre();

// otra forma de crear funciones, función anonima
const segundoNombre = function(){
    console.log('Enrique');
}

// llamar funcion
segundoNombre();

// crear una funcion con argumentos
/**
 * 
 * @param {Number} edad tipo entero
 */
function miEdad(edad){
    console.log('Mi edad: ' + edad);
    console.log(`Mi edad: ${edad}`);

}

miEdad(35);




