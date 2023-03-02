class alumno{
   matricula;
   nss; 
   
   Telefonico = new function (){
    
       let numero =[10];
       numero = document.getElementById("phone").value;
       if (numero < 0){
            alert("Ingresa solo números positivos")
        }
        else{
            localStorage.getItem("numero", JSON.stringify(numero));
            location.href ="inscripcion.html";
        }
    }
    Telefonico()= document.getElementById("sent").onclick
}