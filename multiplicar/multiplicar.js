const fs = require('fs'); // fs es libreria propia de node
const colors = require('colors');
//const fs = require('express'); // paquete que se instala
//const fs = require('./fs');   // archivos que nosotros escribimos 


let listarTabla = (base, limite = 10) => {
    console.log('==================='.green);
    console.log(`   tabla de ${base}`.green);
    console.log('===================='.green);

    for (let i = 1; i <= limite; i++) {
        //console.log(base * i);
        // console.log(`${base} * ${i} = ${base*i}`);
        console.log(` ${base} * ${i} = ${base*i}`);
    }

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es numero`);
            return;
        }

        let data = '';
        // 2*1 =2
        // 2*1 =2
        // 2*10 =20

        for (let i = 1; i <= limite; i++) {
            //console.log(base * i);
            // console.log(`${base} * ${i} = ${base*i}`);
            data += ` ${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });

    });
}

module.exports = { //module.export me deja agrgar los objetos de forma global
    crearArchivo,
    listarTabla
}