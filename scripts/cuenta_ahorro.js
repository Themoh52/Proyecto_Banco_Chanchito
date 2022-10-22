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

//Función que entrega mensajes sobre el primer escenario de la simulación, mediante DOM//
function respuestaSimuladora(){
    let credito = document.getElementsByClassName("cuenta-ahorro_main");
    let respuestaSimulador1 = document.createElement("p");
    respuestaSimulador1.innerText = "Te ofrecemos una cuenta de ahorro con una tasa de interés del "+tasainteres(tasas.find(casod))+"%";
    document.body.appendChild(respuestaSimulador1);
    let respuestaSimulador2 = document.createElement("p");
    respuestaSimulador2.innerText = "Así, si abres una cuenta de ahorro con nosotros, mensualmente tus fondos tendrán un incremento equivalente a "+incremento(sueldo,tasas.find(casod))+" pesos."; 
    document.body.appendChild(respuestaSimulador2);
}

//Función que entrega mensajes sobre el segundo escenario de la simulación, mediante DOM//
function respuestaSimuladorb(){
    let credito = document.getElementsByClassName("credito_main");
    let respuestaSimulador1 = document.createElement("p");
    respuestaSimulador1.innerText = "Te ofrecemos una cuenta de ahorro con una tasa de interés del "+tasainteres(tasas.find(casoc))+"%";
    document.body.appendChild(respuestaSimulador1);
    let respuestaSimulador2 = document.createElement("p");
    respuestaSimulador2.innerText = "Así, si abres una cuenta de ahorro con nosotros, mensualmente tus fondos tendrán un incremento equivalente a "+incremento(sueldo,tasas.find(casoc))+" pesos."; 
    document.body.appendChild(respuestaSimulador2);
}

//Función que entrega mensajes sobre el tercer escenario de la simulación, mediante DOM//
function respuestaSimuladorc(){
    let credito = document.getElementsByClassName("credito_main");
    let respuestaSimulador1 = document.createElement("p");
    respuestaSimulador1.innerText = "Te ofrecemos una cuenta de ahorro con una tasa de interés del "+tasainteres(tasas.find(casob))+"%";
    document.body.appendChild(respuestaSimulador1);
    let respuestaSimulador2 = document.createElement("p");
    respuestaSimulador2.innerText = "Así, si abres una cuenta de ahorro con nosotros, mensualmente tus fondos tendrán un incremento equivalente a "+incremento(sueldo,tasas.find(casob))+" pesos."; 
    document.body.appendChild(respuestaSimulador2);
}

//Función que entrega mensajes sobre el cuarto escenario de la simulación, mediante DOM//
function respuestaSimuladord(){
    let credito = document.getElementsByClassName("credito_main");
    let respuestaSimulador1 = document.createElement("p");
    respuestaSimulador1.innerText = "Te ofrecemos una cuenta de ahorro con una tasa de interés del "+tasainteres(tasas.find(casoa))+"%";
    document.body.appendChild(respuestaSimulador1);
    let respuestaSimulador2 = document.createElement("p");
    respuestaSimulador2.innerText = "Así, si abres una cuenta de ahorro con nosotros, mensualmente tus fondos tendrán un incremento equivalente a "+incremento(sueldo,tasas.find(casoa))+" pesos."; 
    document.body.appendChild(respuestaSimulador2);
}

//Función que entrega mensajes sobre el escenario de rechazo de la simulación, mediante DOM//
function respuestaSimuladore(){
    let credito = document.getElementsByClassName("credito_main");
    let respuestaSimulador1 = document.createElement("p");
    respuestaSimulador1.innerText = "Lo siento, pero tu sueldo no es suficiente para abrir una cuenta de ahorro con nosotros.";
    document.body.appendChild(respuestaSimulador1);
}

//Saludo al usuario y función de cuenta de ahorro (los modales hacen al programa)//
let nombre = prompt("Hola, ingresa tu nombre");
alert("Saludos "+nombre);
let sueldo = 0;
function ahorro(){
do {
    sueldo = parseInt(prompt("Ingresa tu sueldo"));
    if(sueldo>=rangos[0] && sueldo<=rangos[1]){
        respuestaSimuladora();
    }else if(sueldo>=rangos[1] && sueldo<=rangos[2]){
        respuestaSimuladorb();
    }else if(sueldo>=rangos[2] && sueldo<=rangos[3]){
        respuestaSimuladorc();
    }else if(sueldo>=rangos[3]){
        respuestaSimuladord(); 
    }else{
        respuestaSimuladore();
    }
    respuesta = confirm("Esa es la opción de cuenta de ahorro que tenemos para tí. ¿Deseas realizar otra simulación?, ¿O quieres solicitar abrir una Cuenta de Ahorro con nosotros?");
} while (respuesta !=false)
}
ahorro();