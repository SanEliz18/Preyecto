class Alumno {
    constructor(nombre, apellidos, correo, fecha_nacimiento, num_seg_social, telefono, direccion, tutor, matricula) {
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.correo = correo;
      this.fecha_nacimiento = fecha_nacimiento;
      this.num_seg_social = num_seg_social;
      this.telefono = telefono;
      this.direccion = direccion;
      this.tutor = tutor;
      this.matricula = matricula;
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
  
    const matricula = generarMatricula();
  
    const alumno = new Alumno(nombre, apellidos, correo, fecha_nacimiento, num_seg_social, telefono, direccion, tutor, matricula);
  
    let datos = JSON.parse(localStorage.getItem("Datillos")) || [];
    datos.push(alumno);
    localStorage.setItem("Datillos", JSON.stringify(datos));
  
    alert("El alumno ha sido guardado con éxito. Su matrícula es: " + matricula);
  
    limpiarFormulario();
  }
  
  function generarMatricula() {
    const prefijo = "2301";
    let matricula = prefijo;
  
    do {
      matricula += Math.floor(Math.random() * 1000000);
    } while (localStorage.getItem(matricula));
  
    return matricula;
  }
  
  function obtenerAlumno() {
    let matricula = document.getElementById("matri").value;
    let alumnos = JSON.parse(localStorage.getItem("Datillos")) || [];
  
    let alumno = alumnos.find((a) => a.matricula === matricula);
  
    if (alumno) {
      alert("Los datos del alumno son: \n\nNombre completo: " + alumno.nombre + " " + alumno.apellidos + "\nCorreo electrónico: " + alumno.correo + "\nFecha de nacimiento: " + alumno.fecha_nacimiento + "\nNúmero de Seguridad Social: " + alumno.num_seg_social + "\nTeléfono: " + alumno.telefono + "\nDirección: " + alumno.direccion + "\nTutor: " + alumno.tutor + "\nMatrícula: " + alumno.matricula);
    } else {
      alert("No se encontró ningún alumno con esa matrícula.");
    }
  }