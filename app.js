const argv=require('./config/yargs').argv;

console.log(argv);
let comando =argv._[0];
switch (comando) {
    case 'crear':
        console.log("crear tareas");
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