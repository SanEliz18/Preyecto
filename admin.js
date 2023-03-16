
function verificarMateriaSeleccionada() {

  var materiaSeleccionada = document.getElementById("materia").value;
  var textoPredeterminado = "---"
  if (materiaSeleccionada === "" ) {
    alert("Por favor, elija una materia");
  } else if (materiaSeleccionada === textoPredeterminado) {
    alert("Por favor, elija una materia válida");
  } else {
    alert("Materia elegida correctamente: " + materiaSeleccionada);
  }
}
function verificarMateriaSeleccionada1() {
  var materiaSeleccionada = document.getElementById("materia1").value;
  var textoPredeterminado = "---"
  if (materiaSeleccionada === "") {
    alert("Por favor, elija una materia");
  } else if (materiaSeleccionada === textoPredeterminado) {
    alert("Por favor, elija una materia válida");
  } else {
    alert("Materia elegida correctamente: " + materiaSeleccionada);
  }
}
function verificarMateriaSeleccionada2() {
  var materiaSeleccionada = document.getElementById("materia2").value;
  var textoPredeterminado = "---"
  if (materiaSeleccionada === "") {
    alert("Por favor, elija una materia");
  } else if (materiaSeleccionada === textoPredeterminado) {
    alert("Por favor, elija una materia válida");
  } else {
    alert("Materia elegida correctamente: " + materiaSeleccionada);
  }
}
function verificarMateriaSeleccionada3() {
  var materiaSeleccionada = document.getElementById("materia3").value;
  var textoPredeterminado = "---"
  if (materiaSeleccionada === "") {
    alert("Por favor, elija una materia");
  } else if (materiaSeleccionada === textoPredeterminado) {
    alert("Por favor, elija una materia válida");
  } else {
    alert("Materia elegida correctamente: " + materiaSeleccionada);
  }
}




function RestringirMateria(materia) {
  if (materiaSeleccionada1.includes(materia)) {
    alert("Esta materia ya ha sido elegida");
  } else {
    materiaSeleccionada1.push(materia);
    localStorage.setItem("materia", JSON.stringify(materiaSeleccionada1));
    alert(" materia " + materia + " ha sido elegida");
  }
}

function obtenerMateriasElegidas() {
  var materiaSeleccionada1 = localStorage.getItem("materia");
  const materiasElegidas = JSON.parse(materiaSeleccionadasJSON);
  console.log("Materias elegidas: ", materiaSeleccionada1);
}













