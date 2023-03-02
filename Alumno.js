class Alumno extends Persona {
    Matricula;
    NSS;
    constructor(nombre, apellidos, fecha, matricula, nss) {
        super(nombre, apellidos, fecha);
        this.Matricula = matricula;
        this.NSS = nss;
    }
    
    login = function (pass) {
        if(this.password == pass){
            return true;
        }else{
            return false;
        }
    }

    
}