//Pequeña base de datos de cuentas, que incluye el nombre del usuario, correo y contraseña//
const url = "../json/cuenta.json";

//Inicio de la función de inicio de sesión, mediante events//
let formulario = document.getElementById("form");
formulario.addEventListener("submit", iniciarSesion);
//Función de inicio de sesión// 
function iniciarSesion(e){
    e.preventDefault();
    let usuario = document.getElementById("correo").value;
    let pass = document.getElementById("contrasena").value;
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(data=>
        {
        const datosCuentas= data.cuentas;
        if((usuario===datosCuentas[0].correo && pass==datosCuentas[0].pass) || (usuario===datosCuentas[1].correo && pass===datosCuentas[1].pass))
        {
        respuestasesiona(usuario,pass);
        }else{
            respuestasesionb(usuario,pass);
        }
        console.log(datosCuentas[0].correo);
        console.log(datosCuentas[0].constrasena);
        }
    )
}

//Respuesta de inicio de sesión para el usuario//
function respuestasesiona(usuario,pass){
    Swal.fire({
        title: '¡Excelente!',
        text: `¡¡Bienvenido!! , ahora puedes simular y solicitar créditos hipotecarios o simular y abrir una cuenta de ahorro con nosotros`,
        icon: 'success',
        confirmButtonText: '¡Entendido!',
    })
}
//Respuesta de correo o contraseña incorrecta//
function respuestasesionb(usuario,pass){
    Swal.fire({
        title: '¡Error!',
        text: `Lo siento, pero el correo y contraseña ingresados con incorrectos. Inténtalo de nuevo.`,
        icon: 'error',
        confirmButtonText: 'Entiendo',
    })    
}