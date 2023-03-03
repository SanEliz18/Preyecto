var users = Helper.getUsersFromLocalStorage
function registrasUsuario(){
    let nom = document.getElementById('nombre');
    let ap= document.getElementById('apellido');
    let dir= document.getElementById('direccion');
    let tel = document.getElementById('phone');
    let correo = document.getElementById('correo');
    let nss = document.getElementById('nss');
    let res = document.getElementById('tutor');
    let fecha = document.getElementById("date");

    let user1 = new Alumno(nom.value, ap.value, fecha.value, nss.value, dir.value, tel.value, correo.value);
    
    let result = users.find(({ correo }) => correo === correo.value);
    
    if(result == undefined){    
        users.push(user1);
        localStorage.setItem('users', JSON.stringify(users));
        alert("Usuario Registrado");
        user.value ="";
        pass.value ="";
    }else{
        alert("El usuario ya se encuentra registrado");
    }
}