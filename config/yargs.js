
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};



const argv=require('yargs')
.command('crear','comando para crear tareas',{
    descripcion
    })
.command('actualizar', 'este comando actualizara el etado de una tarea',{
    descripcion,
    completado
})
.command('borrar','borrar una tarea',{descripcion})
.help()
.argv;


module.exports={
    argv
}