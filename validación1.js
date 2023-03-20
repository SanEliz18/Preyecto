function guardar() {
    var seleccionados = [];

    var checkboxes = document.querySelectorAll("input[type=checkbox]");

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            seleccionados.push(checkboxes[i].value);
            
        }
    }
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

    localStorage.setItem("seleccionados", JSON.stringify(seleccionados));
}

function cargar() {
    var seleccionados = localStorage.getItem("seleccionados");

    if (seleccionados) {
        seleccionados = JSON.parse(seleccionados);
    }

    var checkboxes = document.querySelectorAll("input[type=checkbox]");

    for (var i = 0; i < checkboxes.length; i++) {
        if (seleccionados && seleccionados.includes(checkboxes[i].value)) {
            checkboxes[i].checked = true;
        } else {
            checkboxes[i].checked = false;
        }
    }

}