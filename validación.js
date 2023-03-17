let lis = [];
var boton = document.getElementById("btn1");
var boton1 = document.getElementById("btn2");
var boton2 = document.getElementById("btn3");
var boton3 = document.getElementById("btn4");
var lista = document.getElementById("lista1");
var list1 = document.getElementById("lista2");
var list2 = document.getElementById("lista3");
var list3 = document.getElementById("lista4");
var checks = document.querySelectorAll(".basi");
var checks1 = document.querySelectorAll(".prof");
var checks2 = document.querySelectorAll(".met");
var checks3 = document.querySelectorAll(".opt");


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

boton1.addEventListener('click',function(){
    list1.innerHTML = '';
    checks1.forEach((e)=>{
        if(e.checked == true){
             var elemento = document.createElement('li');
            elemento.className = 'lista2-item';
            elemento.innerHTML = e.value;
            list1.appendChild(elemento);   
            
        }
    });
    let selectedCheckboxes = [];
 

let inputElements = document.getElementsByClassName('prof');
 
for (let i = 0; i < inputElements.length; i++) {  
    if (inputElements[i].type === 'checkbox' && inputElements[i].checked == true) {
        selectedCheckboxes.push(inputElements[i].value);  
    }  
} console.log(inputElements)
});


boton2.addEventListener('click',function(){
    list2.innerHTML = '';
    checks2.forEach((e)=>{
        if(e.checked == true){
            if(e.checked >= 2){
                alert("Solo puedes elejir 2 materias");
            }
            else{
             var elemento = document.createElement('li');
            elemento.className = 'lista3-item';
            elemento.innerHTML = e.value;
            list2.appendChild(elemento);   
            }
        }
    });
    let selectedCheckboxes = [];
 

let inputElements = document.getElementsByClassName('prof');
 
for (let i = 0; i < inputElements.length; i++) {  
    if (inputElements[i].type === 'checkbox' && inputElements[i].checked == true) {
        selectedCheckboxes.push(inputElements[i].value);  
    }  
} console.log(inputElements)
});

boton3.addEventListener('click',function(){
    list3.innerHTML = '';
    checks3.forEach((e)=>{
        if(e.checked == true){
            if(e.checked >= 2){
                alert("Solo puedes elejir 2 materias");
            }
            else{
             var elemento = document.createElement('li');
            elemento.className = 'lista3-item';
            elemento.innerHTML = e.value;
            list3.appendChild(elemento);   
            }
        }
    });
    let selectedCheckboxes = [];
 

let inputElements = document.getElementsByClassName('opt');
 
for (let i = 0; i < inputElements.length; i++) {  
    if (inputElements[i].type === 'checkbox' && inputElements[i].checked == true) {
        selectedCheckboxes.push(inputElements[i].value);  
    }  
} console.log(inputElements)
});