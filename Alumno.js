class Alumno {
    constructor(nombre, apellidos, correo, fecha_nacimiento, num_seg_social, telefono, direccion, tutor, matricula,materia) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.correo = correo;
      this.fecha_nacimiento = fecha_nacimiento;
      this.num_seg_social = num_seg_social;
      this.telefono = telefono;
      this.direccion = direccion;
      this.tutor = tutor;
      this.matricula = matricula;
      this.materia = materia;
    }
  }
  
  function limpiarFormulario() {
    document.getElementById("formulario").reset();
  }
        let alumnos = []
  function guardarAlumno() {
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const correo = document.getElementById("correo").value;
    const fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
    const num_seg_social = document.getElementById("num_seg_social").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;
    const tutor = document.getElementById("tutor").value;
  
    const matricula = generarMatricula();
    const materia = guardarMateria();
  
    const  alumno002 = new Alumno(nombre, apellidos, correo, fecha_nacimiento, num_seg_social, telefono, direccion, tutor, matricula, materia);
  alumnos.push(alumno002);
  
    localStorage.setItem("Datillos", JSON.stringify(alumno002));
  
      alert("El alumno ha sido guardado con éxito. Su matrícula es: " + matricula);
  
      limpiarFormulario();
    }
 
    function generarMatricula() {
      const prefijo = "2301";
      let matricula = prefijo;
  
      do {
        matricula += Math.floor(Math.random() * 1000000);
      } while (localStorage.getItem(matricula));
  
      matrulaig=matricula; 
      return matricula;
    }
function ost() {
  let dats_local= [];
  let matrulaig = document.getElementById("matri").value;
  let Matricula = JSON.parse (localStorage.getItem("Datillos"))|| [];
  console.log(Matricula);
  dats_local=Matricula;

 let arreglillo = dats_local.some(({matricula})=> matricula === matrulaig); 
 console.log(arreglillo);

 if (arreglillo===undefined){
  alert("datos imcorrectos");
 }else{
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
  lista.innerHTML = '';
      checks.forEach((e)=>{
          if(e.checked == true){
               var elemento = document.createElement('li');
              elemento.className = 'lista1-item';
              elemento.innerHTML = e.value;
              lista.appendChild(elemento);   
          }
      });

  localStorage.setItem("seleccionados", JSON.stringify(seleccionados));
}