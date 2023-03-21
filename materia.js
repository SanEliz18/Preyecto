class Materia extends Alumno{
    constructor(nombre, apellidos, correo, fecha_nacimiento, num_seg_social, telefono, direccion, tutor, matricula, cuatri, materia){
        super(nombre, apellidos, correo, fecha_nacimiento, num_seg_social, telefono, direccion, tutor, matricula, cuatri);
        this.materia=materia;
    }
    materia = new materia (nombre, apellidos, correo, fecha_nacimiento, num_seg_social, telefono, direccion, tutor, matricula, cuatri, materia);
}
function guardarMateria() {

    let seleccionados = JSON.parse(localStorage.getItem("materia")) || [];
  
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
  
    materia = localStorage.setItem("materia", JSON.stringify(seleccionados));
    
  }