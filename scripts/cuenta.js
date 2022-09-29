//Ingreso de Cuenta//
const user = "martin.olate@gmail.com";
const pass = "Mati552,.";

let usuario = prompt("Ingresa tu correo de usuario");
let contrasena = prompt("Ahora ingresa tu contraseña. \nRecuerda que el sistema distingue de mayúsculas y minúsculas, números y símbolos");

if(usuario===user && contrasena===pass){
alert("¡¡Bienvenido!!, ahora puedes simular y solicitar créditos hipotecarios o simular y abrir una cuenta de ahorro con nosotros")
}else{
    alert("Lo siento, pero tu usuario y contraseña son incorrectos. Actualiza la página e inténtalo de nuevo");
};