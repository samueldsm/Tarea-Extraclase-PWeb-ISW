function go() {

    if (document.form.sistemaseguridadusuario.value == 'usuario' && document.form.sistemaseguridadcontrasenna.value == 'usuario') {
        document.form.submit();
       // falta preventDefault();
        return false;

    }
    
    
    else if (document.form.sistemaseguridadusuario.value == 'usuario' && document.form.sistemaseguridadcontrasenna.value == 'usuario') {
        document.form.submit();
       // falta preventDefault();
        return false;

    }
    
    else if (document.form.sistemaseguridadusuario.value == 'usuario' && document.form.sistemaseguridadcontrasenna.value == 'usuario') {
        document.form.submit();
       // falta preventDefault();
        return false;

    }
    
    else{
        alert("Por favor ingrese, un nombre de usuario y contraseña correctos.");
       // falta preventDefault();
        return false;

    }
}

