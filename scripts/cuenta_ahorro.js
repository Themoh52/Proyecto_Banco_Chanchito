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
let incremento = operaciones("Incremento");
let tasainteres = operaciones("TasaInteres");

//Función para aplicar el método de array's "Find"//
function condiciones(condicion){
    if(condicion=="a"){
        return (a)=> a>=(5/100)
    }else if (condicion=="b"){
        return (a)=> a>=(10/100)
    }else if (condicion=="c"){
        return (a)=> a>=(15/100)
    }else if (condicion=="d")
    return (a)=> a>=(20/100) 
}

//Variables con las condiciones creadas//
let casoa= condiciones ("a");
let casob= condiciones ("b");
let casoc= condiciones ("c");
let casod= condiciones ("d");

//Saludo al usuario y función de cuenta de ahorro (los modales hacen al programa)//
let nombre = prompt("Hola, ingresa tu nombre");
alert("Saludos "+nombre);
let sueldo = 0;
function ahorro(){
do {
    sueldo = parseInt(prompt("Ingresa tu sueldo"));
    if(sueldo>=rangos[0] && sueldo<=rangos[1]){
        alert("Te ofrecemos una cuenta de ahorro con una tasa de interés del "+tasainteres(tasas.find(casod))+"%");
        alert("Así, si abres una cuenta de ahorro con nosotros, mensualmente tus fondos tendrán un incremento equivalente a "+incremento(sueldo,tasas.find(casod))+" pesos.");
    }else if(sueldo>=rangos[1] && sueldo<=rangos[2]){
        alert("Te ofrecemos una cuenta de ahorro con una tasa de interés del "+tasainteres(tasas.find(casoc))+"%");
        alert("Así, si abres una cuenta de ahorro con nosotros, mensualmente tus fondos tendrán un incremento equivalente a "+incremento(sueldo,tasas.find(casoc))+" pesos.");
    }else if(sueldo>=rangos[2] && sueldo<=rangos[3]){
        alert("Te ofrecemos una cuenta de ahorro con una tasa de interés del "+tasainteres(tasas.find(casob))+"%");
        alert("Así, si abres una cuenta de ahorro con nosotros, mensualmente tus fondos tendrán un incremento equivalente a "+incremento(sueldo,tasas.find(casob))+" pesos."); 
    }else if(sueldo>=rangos[3]){
        alert("Te ofrecemos una cuenta de ahorro con una tasa de interés del "+tasainteres(tasas.find(casoa))+"%");
        alert("Así, si abres una cuenta de ahorro con nosotros, mensualmente tus fondos tendrán un incremento equivalente a "+incremento(sueldo,tasas.find(casoa))+" pesos."); 
    }else{
        alert("Lo siento, pero tu sueldo no es suficiente para abrir una cuenta de ahorro con nosotros.");
    }
    respuesta = confirm("Esa es la opción de cuenta de ahorro que tenemos para tí. ¿Deseas realizar otra simulación?, ¿O quieres solicitar abrir una Cuenta de Ahorro con nosotros?");
} while (respuesta !=false)
}
ahorro();