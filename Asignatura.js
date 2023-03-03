class Asignatura{
    Nombre;
    #Docente;
    #Carrera;
    
    /**
     * 
     * @param {Docente} docente 
     */
    asignarDocente =  function(docente){
        this.#Docente =  docente;
    }
    /**
     * 
     * @param {Carrera} carrera 
     */
    asignarCarrera =  function(carrera){
        this.#Carrera =  carrera;
    }
}