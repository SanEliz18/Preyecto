var carreras = Tool.getCarreraFromLocalStorage();
var alumnos = [];
var docentes = [];
var asignaturas = [];
var grupos = [];

insertCarreras();




function guardarCarrera() {
    let name = document.getElementById('name');
    let generation = document.getElementById('generation');
    let crr1 = new Carrera(name.value, generation.value);
    carreras.push(crr1);
    alert("Se guardo la carrera");
    name.value = "";
    generation.value = "";

    insertCarreras();

    Tool.setDataToLocalStorage("carreras", carreras);

}

function insertCarreras() {
    let carrera = document.getElementById('carrera');
    let options = ' <option value="" selected disabled>Seleccione</option>';
    for (let i = 0; i < carreras.length; i++) {
        options += `<option value="${i}">${carreras[i].Nombre}</option>`;
    }
    carrera.innerHTML = options;
}

function crearGrupo() {
    let name = document.getElementById('name-group');
    let aula = document.getElementById('aula');
    let carrera = document.getElementById('carrera');
    let gr1 = new Grupo(name.value, aula.value);
    gr1.asignarCarrera(carreras[carrera.value]);
    carreras[carrera.value].agregarGrupo(gr1);
    grupos.push(gr1);

    insertGrupos();

    name.value = "";
    aula.value = "";
    carrera.value = "";
}

function insertGrupos() {
    let groups = document.getElementById('groups');
    let options = ' <option value="" selected disabled>Seleccione</option>';
    for (let i = 0; i < grupos.length; i++) {
        options += `<option value="${i}">${grupos[i].Nombre}</option>`;
    }

    groups.innerHTML = options;
}

function guardarAlumno() {
    let name = document.getElementById('name-student');
    let lastname = document.getElementById('lastname');
    let date = document.getElementById('date');
    let id = document.getElementById('matricula');
    let nss = document.getElementById('matricula');


    let al1 = new Alumno(name.value, lastname.value, date.value, id.value, nss.value);
    alumnos.push(al1);
    name.value = "";
    lastname.value = "";
    date.value = "";
    id.value = "";
    nss.value = "";

}

function insertAlumnos() {
    let students = document.getElementById('students');
    let options = '<option value="" selected disabled>Seleccione</option>';
    for (let i = 0; i < alumnos.length; i++) {
        options += `<option value="${i}">${alumnos[i].Nombre}</option>`;
    }

    students.innerHTML = options;
}

function asignarAlumnoaGrupo() {
    let alumno = alumnos[document.getElementById('students').value];
    let grupo = grupos[document.getElementById('groups').value];
    alumno.asignarGrupo(grupo);
    grupo.agregarAlumno(alumno);
}


function login(){
    var name = document.getElementById('name').value;
    var pass = document.getElementById('pass').value;
    let user = identifyUser(name)

    var alumno1 = new Alumno(user);

    if(alumno1.login(name, pass)){
        window.location.href = "alumno.html";
    }else{
        alert("Usuario o contraseña incorrectos");
    }
}