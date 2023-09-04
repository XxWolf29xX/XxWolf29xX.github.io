const alertaformulario2=document.getElementById("enviarformulariopedidos")
const x4=document.getElementById("validationCustom04")
const x5=document.getElementById("validationCustom05")
const x6=document.getElementById("validationCustom06")
function enviopedido() {
    alertaformulario2.addEventListener("click", () => {
        var check1 = document.getElementById("biz/g").checked
        var check2 = document.getElementById("biz/c").checked
        var check3 = document.getElementById("cremona").checked
        var check4 = document.getElementById("fact").checked
        if (x4.value != "" & x5.value != "" & x6.value != "") {
            if (check1 & cant1.value != "" | check2 & cant2.value != "" | check3 & cant3.value != "" | check4 & cant4.value != "") {
                confirm("¿Seguro quiere enviar el formulario con los datos ingresados?")
                if (confirm("¿Seguro quiere enviar el formulario con los datos ingresados?") == true) {
                    alert("¡Formulario enviado!")
                }
            }
        }
    })
}
enviopedido()