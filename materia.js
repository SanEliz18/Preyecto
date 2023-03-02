class Asignatura{
    Nombre;
    #Maestro;
    #carrera;
    #Grupo
    /**
     * 
     * @param {Maestro} docente 
     */
    asignarDocente =  function(docente){
        this.#Maestro =  docente;
    }
    /**
     * 
     * @param {Carrera} carrera 
     */
    asignarCarrera =  function(carrera){
        this.#Carrera =  carrera;
    }
    /**
     * 
     * @param {Grupo} grupo 
     */
    asignarGrupo =  function(grupo){
        this.#Grupo =  grupo;
    }
}