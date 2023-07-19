// if y else 

// ejemplo1: Las personas mayores igual a 18 pueden ingresar a un bar
let edad = 17;

if (edad >= 18) {

    console.log(`Puedes ingrear, tu edad es ${edad}`);
    
}else{
    console.log('No puedes ingresar, tu edad es: ' + edad);
}

// ejemplo2: Para las elecciones de presidente, los votantes deben ser mayores de edad.

console.warn ('para elecciones, aplicando el condicional if y else')

let edadVotante = 17;

if (edadVotante >= 18) {
    console.log ('Puedes votar');
    
}else{
    console.log ('No puedes votar');
}

// ejemplo 3: cuáles fueron las asignaturas del dia martes habilidades y frontend, mostrar un mensaje con los nombre de los profes

console.warn('condicional con operadores de comparación and (&&)');
const asig = 'habilidades';
const asig2 = 'frontend';
let dia = 'martes';



if (dia ==='martes' && asig2 === 'frontend' && asig === 'habilidades') {
    // mostrar los mensajes con los nombre de los profes
    console.log('Jorge ' + 'y' + ' Diana');
}else{
    console.log('No son los profes');
}

// condicional llamado switch
