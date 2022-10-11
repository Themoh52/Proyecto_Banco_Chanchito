//Simulador de cuenta de ahorro//
//Arrays con los rangos de sueldo, y las tasas de interés//
const rangos = [450000,650000,850000,1250000];
const tasas = [0.05,0.1,0.15,0.2];

//Función de orden superior, que retorna las operaciones de incremento y tasa de interés// 
function operaciones(operacion){
    if (operacion=="Incremento"){
        return (a,b)=> a*b
    }else if (operacion=="TasaInteres"){
        return (a)=> a*100
    }    
}
//Variables que contienen a las funciones nacidas a partir de la función de orden superior//
let i = operaciones("Incremento");
let ti = operaciones("TasaInteres");

//Saludo al usuario y solicitud del sueldo (los modales hacen al programa)//
let nombre = prompt("Hola, ingresa tu nombre");
alert("Saludos "+nombre);
let sueldo = 0;
function ahorro(){
do {
    sueldo = parseInt(prompt("Ingresa tu sueldo"));
    if(sueldo>=rangos[0] && sueldo<=rangos[1]){
        alert("Te ofrecemos una cuenta de ahorro con una tasa de interés del "+ti(tasas[3])+"%");
        alert("Así, si depositas su sueldo con nosotros, mensualmente tus fondos tendrán un incremento equivalente a "+i(sueldo,tasas[3])+" pesos.");
    }else if(sueldo>=rangos[1] && sueldo<=rangos[2]){
        alert("Te ofrecemos una cuenta de ahorro con una tasa de interés del "+ti(tasas[2])+"%");
        alert("Así, si depositas su sueldo con nosotros, mensualmente tus fondos tendrán un incremento equivalente a "+i(sueldo,tasas[2])+" pesos.");
    }else if(sueldo>=rangos[2] && sueldo<=rangos[3]){
        alert("Te ofrecemos una cuenta de ahorro con una tasa de interés del "+ti(tasas[1])+"%");
        alert("Así, si depositas su sueldo con nosotros, mensualmente tus fondos tendrán un incremento equivalente a "+i(sueldo,tasas[1])+" pesos."); 
    }else if(sueldo>=rangos[3]){
        alert("Te ofrecemos una cuenta de ahorro con una tasa de interés del "+ti(tasas[0])+"%");
        alert("Así, si depositas su sueldo con nosotros, mensualmente tus fondos tendrán un incremento equivalente a "+i(sueldo,tasas[0])+" pesos."); 
    }else{
        alert("Lo siento, pero tu sueldo no es suficiente para abrir una cuenta de ahorro con nosotros.");
    }
    respuesta = confirm("Y esa es la opción de cuenta de ahorro que tenemos para tí. ¿Quieres realizar otra simulación?, ¿O deseas solicitar abrir una Cuenta de Ahorro con nosotros?");
} while (respuesta !=false)
}
ahorro();