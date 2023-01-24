function validar(){
    var nombre; 
    var apellido;
    var correo;
    var telefono;
    var mensaje;
    var expresion;

    nombre =document.getElementById("nombre-form").value;
    apellido =document.getElementById("apellido").value;
    correo =document.getElementById("correo").value;
    telefono =document.getElementById("telefono").value;
    mensaje =document.getElementById("mensaje").value;
    expresion = /\w+@+\w+\.+[a-z]/;


    if(nombre ==="" || apellido ==="" || correo ==="" ||telefono ===""||mensaje===""){
        alert("todos los campos son obligatorios");
        return false;
    }
    else if(nombre.length>20){
        alert("Nombre demaciado largo");
        return false;
    }
    else if(apellido.length>30){
        alert("Apellido demaciado largo");
        return false;
    }
    else if(correo.length>100){
        alert("Correo demaciado largo");
        return false;
    }
    else if(!expresion.test(correo)){
        alert("Correo no es valido");
        return false;
    }
      else if(telefono.length>10){
        alert("Telefono demaciado largo");
        return false;
    }
    else if(isNaN(telefono)){
        alert("El Telefono ingresado no es un Número");
        return false;
    }
}

