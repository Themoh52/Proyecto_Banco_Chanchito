//Creador de cuentas para la página "ingresa_aqui.html"//
//Ingreso de Cuenta//
const cuenta1 = new Cuenta ("Martín","martin.olate@gmail.com","Mati552,.","1");
const cuenta2 = new Cuenta ("Sara","sari.oshita@gmail.com","Oshita52.","2"); 

let usuario = prompt("Ingresa tu correo de usuario");
let pass = prompt("Ahora ingresa tu contraseña. \nRecuerda que el sistema distingue de mayúsculas y minúsculas, números y símbolos");

if((usuario===cuenta1.correo && pass==cuenta1.constrasena) || (usuario===cuenta2.correo && pass===cuenta2.constrasena)){
    alert("¡¡Bienvenido!! , ahora puedes simular y solicitar créditos hipotecarios o simular y abrir una cuenta de ahorro con nosotros");
}else{
    alert("Lo siento, pero el correo y contraseña ingresados con incorrectos. Actualiza la página e inténtalo de nuevo")
}
