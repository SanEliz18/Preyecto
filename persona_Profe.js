class Persona{
    #id;
    Nombre;
    Apellidos;
     F_nacimiento;
    Correo;
    #nss;
    #curp;

    constructor (nom,ape, f,nss,curp,emali){
        this.Nombre=nom;
        this.Apellidos=ape,
        this.F_nacimiento=f;
        this.correo=emali;
        this.#curp=curp;
        this.#nss=nss;
    }
    edad = new function (){
        return 2023-this.F_nacimiento;
    }
    verNss =  function(){
        return `El NSS del la persona es: ${this.#nss}`;
     }
     nombreCompleto = function(){
        return `${this.nombre} ${this.apellidos}`;
     }
     
     genero = function(){
        let gender = this.#curp;
        return gender.substring(10,11);;
     }
    Actualizar_correo = new function(correo){
        this.Correo = correo;
    }

    Calcular_Edad = function(){
        let fecha_actual = new Date();
        let F_nacimiento = new Date(this.F_nacimiento);
        let edad = fecha_actual.getFullYear()- F_nacimiento.getFullYear();
        let mes= fecha_actual.getMonth()-F_nacimiento.getMonth();
        if(mes <0 || (mes===0 && fecha_actual.getDate()<F_nacimiento.getDate())){
            edad--;
        }
        return parseInt(edad);
    }
}