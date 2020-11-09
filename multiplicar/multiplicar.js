const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('====================='.green);
    console.log(`tabla de ${base}`.green);
    console.log('====================='.green);

    for(let i=1; i <= limite; i++){
        console.log(`${base} x ${i} = ${base * i}`);
    }
}

let crearArchivo =  ( base, limite = 10 ) => {
    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject(`El valor introducido ( ${base} ) no es un número!`);
            return;
        }

        let data = '';

        for(let i = 1; i <= limite; i++){
            data += (`${base} x ${i} = ${base * i} \n`);
        }

        let baseRoute = 'tablas/';
        let nombreArchivo = `tabla-${base}.txt`;

        fs.writeFile(`${baseRoute}${nombreArchivo}`, data, (err) => {
            if (err) {
                reject( err );
            } 
            resolve (nombreArchivo);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}
