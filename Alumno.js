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

let alumnos = [];
function guardarAlumno() {
  const nombre = document.getElementById("nombre").value;
  const apellidos = document.getElementById("apellidos").value;
  const correo = document.getElementById("correo").value;
  const fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
  const num_seg_social = document.getElementById("num_seg_social").value;
  const telefono = document.getElementById("telefono").value;
  const direccion = document.getElementById("direccion").value;
  const tutor = document.getElementById("tutor").value;

  const cuatri = document.getElementById("cuatris").value;
  if(cuatri.value == true){
    console.log(cuatri);
  }
  const matricula = generarMatricula();
  
  

  const form = document.getElementById("formulario");
  const alumno002 = new Alumno(nombre, apellidos, correo, fecha_nacimiento, num_seg_social, telefono, direccion, tutor, matricula, cuatri);
  
    const camposRequeridos = form.querySelectorAll("[required]");
    
    let hayCamposVacios = false;

    camposRequeridos.forEach(function(campo) {
      if (campo.value === "") {
        if(cuatri.value === ""){
        hayCamposVacios = true;
      }
    }
  });
  
    if (hayCamposVacios) {
      alert("Por favor, completa todos los campos requeridos y selecciona un cuatrimestre.");
      return false;
    }
    else{
      alumnos.push(alumno002);
      localStorage.setItem("Datillos", JSON.stringify(alumnos));
      
      alert("El alumno ha sido guardado con éxito. Su matrícula es: " + matricula);

      limpiarFormulario();

      window.location.href="validación1.html";
      return true;

    }
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
  let matriculs = document.getElementById("matri").value;
  let alumnos_local = JSON.parse(localStorage.getItem("Datillos")) || [];
  console.log(alumnos_local);
  dats_local = alumnos_local;

  let arreglillo = dats_local.some(({ matricula}) => matricula === matriculs);
  console.log(arreglillo);

  if (arreglillo === undefined) {
    alert("datos incorrectos");
  } else {
    alert("datos correctos");
  }
}

function guardarMateria() {
  var seleccionados = [];

  var checkboxes = document.querySelectorAll("input[type=checkbox]");

  for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
          seleccionados.push(checkboxes[i].value);
          
      }
  }
  let lista = document.getElementById("lista1");
  let checks = document.querySelectorAll(".basi"); 
  let list = document.getElementById("lista2");
  let checks1 = document.querySelectorAll(".prof"); 
  let list1 = document.getElementById("lista3");
  let checks2 = document.querySelectorAll(".met"); 
  let list2 = document.getElementById("lista4");
  let checks3 = document.querySelectorAll(".op"); 
  lista.innerHTML = '';
      checks.forEach((e)=>{
          if(e.checked == true){
               var elemento = document.createElement('li');
              elemento.className = 'lista1-item';
              elemento.innerHTML = e.value;
              lista.appendChild(elemento);   
          }
      });
      list.innerHTML = '';
      checks1.forEach((e)=>{
          if(e.checked == true){
               var elemento = document.createElement('li');
              elemento.className = 'lista2-item';
              elemento.innerHTML = e.value;
              list.appendChild(elemento);   
          }
      });
      list1.innerHTML = '';
      checks2.forEach((e)=>{
          if(e.checked == true){
               var elemento = document.createElement('li');
              elemento.className = 'lista3-item';
              elemento.innerHTML = e.value;
              list1.appendChild(elemento);   
          }
      });
      list2.innerHTML = '';
      checks3.forEach((e)=>{
          if(e.checked == true){
               var elemento = document.createElement('li');
              elemento.className = 'lista4-item';
              elemento.innerHTML = e.value;
              list2.appendChild(elemento);   
          }
      });

  localStorage.setItem("seleccionados", JSON.stringify(seleccionados));
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

function seleccionar_materias_basicas() {
  number_basic = 0;
  let basic = document.getElementById('basic').getElementsByTagName("input");
  for (let i = 0; i < basic.length; i++) {
      if (basic[i].checked) {
          number_basic++;
          if (number_basic > 2) {
              basic[i].checked = false;
              number_basic--;
              alert("Solo puede seleccionar un máximo de 2 materias en el área básica.");
          }
      }
  }
}
function seleccionar_materias_metod() {
  number_metodologicas = 0;
  let metod = document.getElementById('metodologicas').getElementsByTagName("input");
  for (let i = 0; i < metod.length; i++) {
      if (metod[i].checked) {
          number_metodologicas++;
      }
  }
}

