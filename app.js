const argv=require('./config/yargs').argv;

const porHacer=require('./por-hacer/por-hacer');

//console.log(argv);
let comando =argv._[0];
switch (comando) {
    case 'crear':
       let tarea= porHacer.crear(argv.descripcion);
       console.log(tarea);
        break;

        case 'listar':
        console.log("listar tareas");
        break;

        case 'actualizar':
        console.log("actualizar tareas");
        break;

    default:
        break;
}