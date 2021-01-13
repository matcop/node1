

const argv=require('yargs')
.command('crear','comando para crear tareas',{
    description:{
        demand:true,
        alias:'d',
        desc:'ademas de usar el comando crear, este tiene un alias de c para que pueda usarlo'
    }

   
})
.command('actualizar', 'este comando actualizara el etado de una tarea',{
    description:{
        default:true,
        alias:'a',
        description:'ademas de usar el comando actualiza, este tiene un alias a '
    },
    completado:{
        default:true,
        alias:'c',
        description:'marca como completado una tarea'

    }
})
.help()
.argv;


module.exports={
    argv
}