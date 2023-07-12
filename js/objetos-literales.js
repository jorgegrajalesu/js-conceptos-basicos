// sintaxis de un objeto literal

let auto = {
    nombre: 'Sandero',
    marca:'Renoult',
    placa:'ARY-510',
    color:'Negro',
    precio: 52000000,
    Estado:true,
    ciudad:'Medellín',
};

// muestra en la consola todo las propiedades del objeto
console.table(auto);

// mostrar el nombre de lo auto
console.warn('Mostrar el nombre del auto');
console.log('Nombre: ', auto.nombre);
console.log('Precio y el color: ', auto['precio'],auto['color']);