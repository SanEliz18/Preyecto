class Alumno {
  constructor(nombre, apellidos, correo, fecha_nacimiento, num_seg_social, telefono, direccion, tutor, matricula, cuatri) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.correo = correo;
    this.fecha_nacimiento = fecha_nacimiento;
    this.num_seg_social = num_seg_social;
    this.telefono = telefono;
    this.direccion = direccion;
    this.tutor = tutor;
    this.matricula = matricula;
    this.cuatrimestre = cuatri;
  }
}

function limpiarFormulario() {
  document.getElementById("formulario").reset();
}


function guardarAlumno() {
  const nombre = document.getElementById("nombre").value;
  const apellidos = document.getElementById("apellidos").value;
  const correo = document.getElementById("correo").value;
  const fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
  const num_seg_social = document.getElementById("num_seg_social").value;
  const telefono = document.getElementById("telefono").value;
  const direccion = document.getElementById("direccion").value;
  const tutor = document.getElementById("tutor").value;
  const cuatri = "Primer cuatrimestre";
  
  const matricula = generarMatricula();
  
  const form = document.getElementById("formulario");
  const alumno002 = new Alumno(nombre, apellidos, correo, fecha_nacimiento, num_seg_social, telefono, direccion, tutor, matricula, cuatri);
  
  let alumnos = JSON.parse(localStorage.getItem("Datos")) || [];

    const camposRequeridos = form.querySelectorAll("[required]");
    
    let hayCamposVacios = false;

    camposRequeridos.forEach(function(campo) {
      if (campo.value === "") {
        hayCamposVacios = true;
      
    }
  });
  
    if (hayCamposVacios) {
      alert("Por favor, completa todos los campos requeridos y selecciona un cuatrimestre.");
      return false;
    }
    else{
    var edad = calcularEdad(fecha_nacimiento);
    document.getElementById("edad").innerHTML = "La edad es: " + edad;
      if(edad < 17){
        alert("eres muy joven");
        return false;

      }
      else{
        alumnos.push(alumno002);

        localStorage.setItem("Datos", JSON.stringify(alumnos));
      
      alert("El alumno ha sido guardado con éxito. Su matrícula es: " + matricula);

      limpiarFormulario();

      window.location.href="validación1.html";
      return true;
      }
    }
  
}

function calcularEdad(fecha_nacimiento) {
  var hoy = new Date();
  var cumpleanos = new Date(fecha_nacimiento);
  var edad = hoy.getFullYear() - cumpleanos.getFullYear();
  var m = hoy.getMonth() - cumpleanos.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
    edad--;
  }
  return edad;
}


function generarMatricula() {
  const prefijo = "2301";
  let matricula = prefijo;

  do {
    matricula += Math.floor(Math.random() * 1000);
  } while (localStorage.getItem(matricula));

  matriculs = matricula;
  return matricula;
}

function ost() {

  let dats_local= [];
  let matriculs = document.getElementById("mat").value;
  let alumnos_local = JSON.parse(localStorage.getItem("Datos")) || [];
  console.log(alumnos_local);
  dats_local = alumnos_local;

  let arreglillo = dats_local.some(({ matricula}) => matricula === matriculs);
  console.log(arreglillo);

    if (arreglillo === false) {
    alert("datos incorrectos");
  } else {
      var select = document.getElementById("cuatris");
      if (select.value === "") {
        alert("Debes seleccionar un cuatrimestre");
        return false;
      }else{
    alert("datos correctos");

    window.location.href="validación1.html";
    return true;
      }
  }
}


function listo(){
  alert("Tu inscripción se llevo a cavo con exito");
  window.location.href="index.html"
}

function cargar() {
  var seleccionados = localStorage.getItem("seleccionados");

  if (seleccionados) {
    seleccionados = JSON.parse(seleccionados);
  }

  var checkboxes = document.querySelectorAll("input[type=checkbox]");

  for (var i = 0; i < checkboxes.length; i++) {
    if (seleccionados && seleccionados.includes(checkboxes[i].value)) {
      checkboxes[i].checked = false;
    } else {
      checkboxes[i].checked = false;
    }
    /* Restringir las materias*/
    if (checkboxes[i].value === "Ingles II" || checkboxes[i].value === "Ingles III" || checkboxes[i].value === "Ingles IV" || checkboxes[i].value === "Ingles V"|| checkboxes[i].value === "Algoritmica y estructura de datos II" || checkboxes[i].value === "Analisis de diseño de sistemas II"|| checkboxes[i].value === "Bases de datos II" || checkboxes[i].value === "Ingeneria en software II" || checkboxes[i].value === "Programacion orientado a objetos II" || checkboxes[i].value === "Redes de computadoras II"|| checkboxes[i].value === "Seminario de la Investigacion II") {
      checkboxes[i].disabled = true;
 
    }
  }
  
}

cargar();


function seleccionar_materias_metod() {
  number_metodologicas = 0;
  let metod = document.getElementById('meto').getElementsByTagName("input");
  for (let i = 0; i < metod.length; i++) {
      if (metod[i].checked) {
          number_metodologicas++;
      }
  }
}

