const alertaformulario1=document.getElementById("enviarformulariocontacto")
const x1=document.getElementById("validationCustom01")
const x2=document.getElementById("validationCustom02")
const x3=document.getElementById("validationCustom03")
function enviocontacto() {
    alertaformulario1.addEventListener("click", () => {
        if (x1.value != "" & x2.value != "" & x3.value != "") {
            confirm("¿Seguro quiere enviar el formulario con los datos ingresados?")
            if (confirm("¿Seguro quiere enviar el formulario con los datos ingresados?") == true) {
                alert("¡Formulario enviado!")
            }
        }
    })
}
enviocontacto()
