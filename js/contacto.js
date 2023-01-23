
document.getElementById("boton_enviar").onclick =function(){
    Enviar();
};

function Enviar(){
    window.alert("El Mensaje Fue enviado Correctamente, Gracias por contactarse!!!.");
    document.getElementById("boton_enviar").style.display= "none"
}