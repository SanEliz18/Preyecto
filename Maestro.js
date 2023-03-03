class Docente extends Persona{
    Oficio;
    Clave;
    #materia = [];
    constructor(oficio, clave){
        super(nombre, apellidos, fecha);
        this.Oficio = oficio;
        this.Clave =  clave;
    }

    agregarAsignatura = function(asignatura){
        let asignaturas =  this.#Asignatura;
        asignaturas.push(asignatura);
    }
}