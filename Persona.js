class Persona {
    #id;
    Nombre;
    Apellidos;
    correo;
    F_nacimiento;
    Dirección;
    Télefono;
    Nss;

    constructor(nombre, apellidos, curp, correo, contraseña){
    let nom = document.getElementById('nombre');
    let ap= document.getElementById('apellido');
    let dir= document.getElementById('direccion');
    let tel = document.getElementById('phone');
    let correo = document.getElementById('correo');
    let nss = document.getElementById('nss');
    let fecha = document.getElementById("date");
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

    calcularEdad =  function(){
        let fecha = new Date();
        let edad = fecha.getFullYear() - this.F_nacimiento.getFullYear();
        return edad;
    }

}