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

    const alumno = {
      nombre: nombre,
      apellidos: apellidos,
      correo: correo,
      fecha_nacimiento: fecha_nacimiento,
      num_seg_social: num_seg_social,
      telefono: telefono,
      direccion: direccion,
      tutor: tutor,
      matricula: matricula
    };

    localStorage.setItem(matricula, JSON.stringify(alumno));

    alert("El alumno ha sido guardado con éxito. Su matrícula es: " + matricula);

    limpiarFormulario();
  }

  function generarMatricula() {
    const prefijo = "2301";
    let matricula = prefijo;

    do {
      matricula += Math.floor(Math.random() * 1000);
    } while (localStorage.getItem(matricula));

    return matricula;
  }