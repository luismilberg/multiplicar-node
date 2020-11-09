//Requires
const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];


switch(comando){
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(data => console.log(`Se ha creado el archivo: ${data}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}

