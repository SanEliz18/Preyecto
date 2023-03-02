class Carrera{
    Nombre;
    Generacion;
    #grupo = [];
    constructor(nombre, generacion){
        this.Nombre =  nombre;
        this.Generacion =  generacion;
    }

    agregarGrupo = function(grupo){
        let grupos =  this.#Grupo;
        grupos.push(grupo);
    }
}