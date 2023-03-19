class Validacion extends Alumno{
    materia;
    constructor (nombre, apellidos, correo, fecha_nacimiento, num_seg_social, telefono, direccion, tutor, matricula, materias){
        super(nombre, apellidos, correo, fecha_nacimiento, num_seg_social, telefono, direccion, tutor, matricula);
         
    }
       

    guardarmateria= new function(){
       let boton = document.getElementById("btn1");
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
        let selectedCheckboxes = [];
     
    
    let inputElements = document.getElementsByClassName('basi');
    let materias; 
    
    for (let i = 0; i < inputElements.length; i++) {  
        if (inputElements[i].type === 'checkbox' && inputElements[i].checked == true) {
            selectedCheckboxes.push(inputElements[i].value);
            
            
        }  
         
    } 
}