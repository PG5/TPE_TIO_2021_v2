"use strict"
console.log("hola Mundo");
let btnEnviar = document.getElementById("btnEnviar");
btnEnviar.addEventListener("click", function ()  {
    let nombre = document.getElementById("nombre");
    let correo = document.getElementById("email");
    let mensaje = document.getElementById("mensaje");
    
    if (nombre.value == "" || correo.value == "" || mensaje.value == "") {
        alert("No puede vercampos vacio");
        console.log("que paso");
    }
    else {
        alert("mensaje enviado");
    }

} ) 