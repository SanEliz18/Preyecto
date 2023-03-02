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
}