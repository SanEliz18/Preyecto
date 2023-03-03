class Alumno extends Persona{
    Matricula;
    ap;
    dir;
    tel;
    correo;
    nss;
    res;
    fecha;
    constructor(nom, ap, fecha, matricula, nss, dir, tel, correo) {
        super(nom, ap, dir, correo, tel, nss, fecha);
    this.ap= document.getElementById('apellido');
    this.dir= document.getElementById('direccion');
    this.tel = document.getElementById('phone');
    this.correo = document.getElementById('correo');
    this.nss = document.getElementById('nss');
    this.res = document.getElementById('tutor');
    this.fecha = document.getElementById("date");

    
    }
    
    matri = new function (){

    }
    
    nuevoAlumno = new function(){
        let alumno1 = new Alumno (nom.value, ap.value, fecha.value, nss.value, dir.value, tel.value, correo.valueñ);

        localStorage.getItem("Alumno", JSON.stringify(alumno1));
    }
}