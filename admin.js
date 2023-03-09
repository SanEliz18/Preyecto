
  var materia = [];
  var materia1 = [];
  var materia2 = [];
  var materia3 = [];

  function guardarmateria(){
    alert("Se guardo la materia");
 

}
function guardarmateria1(){
  let name =  document.getElementById('nombre del producto');
  let generation  =  document.getElementById('enviar');
  let crr1 = new materia1(name.value, generation.value);
  materia1.push(crr1);
  alert("Se guardo la materia");
  name.value = "";
  generation.value = "";

  insertmateria1();
}
function guardarmateria2(){
  let name =  document.getElementById('nombre del producto');
  let generation  =  document.getElementById('enviar');
  let crr1 = new materia2(name.value, generation.value);
  materia2.push(crr1);
  alert("Se guardo la materia");
  name.value = "";
  generation.value = "";

  insertmateria2();
}
function guardarmateria3(){
  let name =  document.getElementById('nombre del producto');
  let generation  =  document.getElementById('enviar');
  let crr1 = new materia3(name.value, generation.value);
  materia3.push(crr1);
  alert("Se guardo la materia");
  name.value = "";
  generation.value = "";

  insertmateria3();
}
function insertmateria(){
  let materia =  document.getElementById('materia');
  let options = ' <option value="" selected disabled>Seleccione</option>';
  for(let i = 0; i<materia.length; i++){
      options += `<option value="${i}">${materia[i].Nombre}</option>`;
  }
  materia.innerHTML = options;
}
