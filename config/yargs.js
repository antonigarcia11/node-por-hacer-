const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
        /*descripcion: {
                demand: true,
                alias: 'd',
                desc: 'Descripcion de la tarea por hacer'
            }*/
    })

.command('actualizar', 'Actualiza el estado completado de una teare', {
    descripcion,
    /*{
           demand: true,
           alias: 'd',
           desc: 'Descripcion de la tarea por hacer'
       },*/
    completado
    /*{
           default: true,
           alias: 'c',
           desc: 'Marca como completado o pendiente la tarea'
       }*/
})


.command('borrar', 'Borra una tarea', {
        descripcion
        /*{
                   demand: true,
                   alias: 'd',
                   desc: 'Descripcion de la tarea por hacer'
               },*/
    })
    .help()
    .argv;

module.exports = {
    argv
}