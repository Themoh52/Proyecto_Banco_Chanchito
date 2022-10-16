//Creador de cuentas para la página "ingresa_aqui.html"//
//Ingreso de Cuenta//
const cuenta1 = new Cuenta ("Martín","martin.olate@gmail.com","Mati552,.","1");
const cuenta2 = new Cuenta ("Sara","sari.oshita@gmail.com","Oshita52.","2");
const basedatos= []; 

// Solicitud de correo del usuario y contraseña//
let usuario = prompt("Ingresa tu correo de usuario");
let pass = prompt("Ahora ingresa tu contraseña. \nRecuerda que el sistema distingue de mayúsculas y minúsculas, números y símbolos");

//Función de inicio de sesión// 
function sesion(){
if((usuario===cuenta1.correo && pass==cuenta1.constrasena) || (usuario===cuenta2.correo && pass===cuenta2.constrasena) || (usuario==basedatos[0] && pass==basedatos[1])){
    alert("¡¡Bienvenido!! , ahora puedes simular y solicitar créditos hipotecarios o simular y abrir una cuenta de ahorro con nosotros");
}else{
    respuesta =confirm("Lo siento, pero el correo y contraseña ingresados con incorrectos. Actualiza la página e inténtalo de nuevo. \n Si no tienes una cuenta con nosotros, ¿Deseas crear una nueva cuenta?")
    if (respuesta==true){
        let nuevousuario= prompt("Escribe un correo electrónico. Esa será tu nombre de usuario.");
        let nuevacontrasena= prompt("Escribe una nueva contraseña. Esta debe contener mayúsculas, minúsculas, números y símbolos.");
        basedatos.push(nuevousuario);
        basedatos.push(nuevacontrasena);
        alert("Listo, has creado una cuenta en Banco Chanchito. Ahora actualiza la página e inicia sesión.")
    }
}
}
sesion();