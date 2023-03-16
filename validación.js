let lis = [];
var boton = document.getElementById("btn1");
var lista = document.getElementById("lista1");
var checks = document.querySelectorAll(".basi");

boton.addEventListener('click',function(){
    lista.innerHTML = '';
    checks.forEach((e)=>{
        if(e.checked == true){
            if(e.checked >= 2){
                alert("Solo puedes elejir 2 materias");
            }
            else{
             var elemento = document.createElement('li');
            elemento.className = 'lista1-item';
            elemento.innerHTML = e.value;
            lista.appendChild(elemento);   
            }
        }
    });
    let selectedCheckboxes = [];
 

let inputElements = document.getElementsByClassName('basi');
 
for (let i = 0; i < inputElements.length; i++) {  
    if (inputElements[i].type === 'checkbox' && inputElements[i].checked == true) {
        selectedCheckboxes.push(inputElements[i].value);  
    }  
} console.log(inputElements)
});