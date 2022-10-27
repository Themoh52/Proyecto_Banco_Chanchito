//Creador de cuentas para la página "ingresa_aqui.html"//
//Ingreso de Cuenta//
const cuenta1 = new Cuenta ("Martín","martin.olate@gmail.com","Mati552,.","1");
const cuenta2 = new Cuenta ("Sara","sari.oshita@gmail.com","Oshita52.","2"); 

let cuenta = document.getElementById("formulario");
formulario.addEventListener("submit", sesion);
//Función de inicio de sesión// 
function sesion(e){
    e.preventDefault();
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