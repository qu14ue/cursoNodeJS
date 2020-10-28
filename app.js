const fs = require('fs');

let tareasJson = fs.readFileSync('./tareas.json', 'utf-8');

let arrayDeTareas = JSON.parse(tareasJson); 

console.log('Este es el listado de tareas que existen:');
console.log('-----------------------------------------');

for(let i=0; i<arrayDeTareas.length; i++){
    console.log((i+1)+ '. ' +arrayDeTareas[i].titulo)
}

