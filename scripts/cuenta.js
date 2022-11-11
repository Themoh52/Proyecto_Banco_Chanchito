//Pequeña base de datos de cuentas, que incluye el nombre del usuario, correo y contraseña//
const url = "../bases_datos/bd_cuenta.json";

//Guardado de las cuentas en localstorage, mediante el uso de JSON//
const cuenta1JSON = JSON.stringify(cuenta1);
const cuenta2JSON = JSON.stringify(cuenta2);
localStorage.setItem("cuentaMartin",cuenta1JSON);
localStorage.setItem("cuentaSara",cuenta2JSON);

//Inicio de la función de inicio de sesión, mediante events//
let cuenta = document.getElementById("formulario");
formulario.addEventListener("submit", sesion);
//Función de inicio de sesión// 
function sesion(e){
    e.preventDefault();
    const obtencionCuenta1 = JSON.parse(localStorage.getItem("cuentaMartin"));    
    const obtencionCuenta2 = JSON.parse(localStorage.getItem("cuentaSara"));
    let usuario = document.getElementById("correo").value;
    let pass = document.getElementById("contrasena").value;
    if((usuario===cuenta1.correo && pass==cuenta1.constrasena) || (usuario===cuenta2.correo && pass===cuenta2.constrasena)){
    respuestasesiona(usuario,pass);
    }else{
    respuestasesionb(usuario,pass);
    }
}

//Respuesta de inicio de sesión para el usuario//
function respuestasesiona(usuario,pass){
    let respuestaSimulador1 = document.getElementById("respuesta-simulador1");
    if((usuario===cuenta1.correo && pass==cuenta1.constrasena) || (usuario===cuenta2.correo && pass===cuenta2.constrasena)){
    respuestaSimulador1.innerText ="¡¡Bienvenido!! , ahora puedes simular y solicitar créditos hipotecarios o simular y abrir una cuenta de ahorro con nosotros"; 
    }
}
//Respuesta de correo o contraseña incorrecta//
function respuestasesionb(usuario,pass){
    let respuestaSimulador1 = document.getElementById("respuesta-simulador1");
    if((usuario!=cuenta1.correo && pass!=cuenta1.constrasena) || (usuario!=cuenta2.correo && pass!=cuenta2.constrasena)){
    respuestaSimulador1.innerText = "Lo siento, pero el correo y contraseña ingresados con incorrectos. Actualiza la página e inténtalo de nuevo."; 
    }
}