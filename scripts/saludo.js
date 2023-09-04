function saludo() {
    let nombre = sessionStorage.getItem("nombre");
    if (nombre == "" | nombre == null){
        let nombreaux = prompt("ingrese un nombre");
        while(nombreaux == "" | nombreaux == null){
            nombreaux = prompt("por favor, ingrese un nombre")
        }
        sessionStorage.setItem("nombre",nombreaux);
        nombre = sessionStorage.getItem("nombre");
        }
        alert("Bienvenido "+nombre)
}
saludo()
