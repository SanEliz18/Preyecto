class Persona {
    #id;
    Nombre;
    Apellidos;
    F_nacimiento;
    constructor(nombre, apellidos, fecha){
        this.Nombre =  nombre;
        this.Apellidos = apellidos;
        this.F_nacimiento =  fecha;
        //this.#id = this.#crearId();
    }

    calcularEdad =  function(){
        let fecha = new Date();
        let edad = fecha.getFullYear() - this.F_nacimiento.getFullYear();
        return edad;
    }

    /**
     * 
     * @returns {Int}
     */
    #crearId= function(){
        let name =  this.Nombre;
        return  name.charAt(0) + Math.floor(Math.random() * 1000);
    }
}