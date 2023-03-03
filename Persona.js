<<<<<<< HEAD
class Persona {
    #id;
    Nombre;
    Apellidos;
    curp = [20];
    correo;
    contraseña;
    constructor(nombre, apellidos, curp, correo, contraseña){
        this.Nombre =  nombre;
        this.Apellidos = apellidos;
        this.curp = curp;
        this.correo;
        this.contraseña = contraseña;
        //this.#id = this.#crearId();
    }

    
    /**
     * 
     * @returns {Int}
     */
    #crearId= function(){
        let name =  this.Nombre;
        return  name.charAt(0) + Math.floor(Math.random() * 1000);
    }
=======
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
>>>>>>> ab3ecd2793c73025f9eaa5da785d009c9e7d7dd8
}