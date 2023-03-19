

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