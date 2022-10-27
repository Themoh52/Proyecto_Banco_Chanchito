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
function respuestaSimuladora(sueldo){
    let respuestaSimulador1 = document.getElementById("respuesta-simulador1");
    let respuestaSimulador2 = document.getElementById("respuesta-simulador2");
    if(sueldo!=0){
    respuestaSimulador1.innerText = "Te ofrecemos una cuenta de ahorro con una tasa de interés del "+tasainteres(tasas.find(casod))+"%";
    respuestaSimulador2.innerText = "Así, si abres una cuenta de ahorro con nosotros, mensualmente tus fondos tendrán un incremento equivalente a "+incremento(sueldo,tasas.find(casod))+" pesos."; 
    }else{
        respuestaSimulador1.remove();
        respuestaSimulador2.remove();
    }
}

//Función que entrega mensajes sobre el segundo escenario de la simulación, mediante DOM//
function respuestaSimuladorb(sueldo){
    let respuestaSimulador1 = document.getElementById("respuesta-simulador1");
    let respuestaSimulador2 = document.getElementById("respuesta-simulador2");
    if(sueldo!=0){
    respuestaSimulador1.innerText = "Te ofrecemos una cuenta de ahorro con una tasa de interés del "+tasainteres(tasas.find(casoc))+"%";
    respuestaSimulador2.innerText = "Así, si abres una cuenta de ahorro con nosotros, mensualmente tus fondos tendrán un incremento equivalente a "+incremento(sueldo,tasas.find(casoc))+" pesos."; 
    }else{
    respuestaSimulador1.remove();
    respuestaSimulador2.remove();
    }
}

//Función que entrega mensajes sobre el tercer escenario de la simulación, mediante DOM//
function respuestaSimuladorc(sueldo){
    let respuestaSimulador1 = document.getElementById("respuesta-simulador1");
    let respuestaSimulador2 = document.getElementById("respuesta-simulador2");
    if(sueldo!=0){
    respuestaSimulador1.innerText = "Te ofrecemos una cuenta de ahorro con una tasa de interés del "+tasainteres(tasas.find(casob))+"%";
    respuestaSimulador2.innerText = "Así, si abres una cuenta de ahorro con nosotros, mensualmente tus fondos tendrán un incremento equivalente a "+incremento(sueldo,tasas.find(casob))+" pesos."; 
    }else{
    respuestaSimulador1.remove();
    respuestaSimulador2.remove();
    }
}

//Función que entrega mensajes sobre el cuarto escenario de la simulación, mediante DOM//
function respuestaSimuladord(sueldo){
    let respuestaSimulador1 = document.getElementById("respuesta-simulador1");
    let respuestaSimulador2 = document.getElementById("respuesta-simulador2");
    if(sueldo!=0){
    respuestaSimulador1.innerText = "Te ofrecemos una cuenta de ahorro con una tasa de interés del "+tasainteres(tasas.find(casoa))+"%";
    respuestaSimulador2.innerText = "Así, si abres una cuenta de ahorro con nosotros, mensualmente tus fondos tendrán un incremento equivalente a "+incremento(sueldo,tasas.find(casoa))+" pesos."; 
    }else{
        respuestaSimulador1.remove();
        respuestaSimulador2.remove();
    }
}

//Función que entrega mensajes sobre el escenario de rechazo de la simulación, mediante DOM//
function respuestaSimuladore(sueldo){
    let credito = document.getElementsByClassName("credito_main");
    let respuestaSimulador1 = document.createElement("p");
    respuestaSimulador1.innerText = "Lo siento, pero tu sueldo no es suficiente para abrir una cuenta de ahorro con nosotros.";
    credito.appendChild(respuestaSimulador1);
}

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", ahorro);

//Función de cuenta de ahorro//

function ahorro(e){
    e.preventDefault();
    sueldo = parseInt(document.getElementById("sueldo").value);
    if(sueldo>=rangos[0] && sueldo<=rangos[1]){
        respuestaSimuladora(sueldo);
    }else if(sueldo>=rangos[1] && sueldo<=rangos[2]){
        respuestaSimuladorb(sueldo);
    }else if(sueldo>=rangos[2] && sueldo<=rangos[3]){
        respuestaSimuladorc(sueldo);
    }else if(sueldo>=rangos[3]){
        respuestaSimuladord(sueldo); 
    }else{
        respuestaSimuladore();
    }
}

//Función para borrar la respuesta del sitio//
let borrarFormulario = document.getElementById("formulario");
borrarFormulario.addEventListener("reset", borrar)
function borrar(){
    respuestaSimuladora(0);
}