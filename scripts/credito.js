//Simulador de crédito hipotecario//
// Array con las tasas de interés, constante del valor de la UF, en CLP; y Array con los años de duración del crédito//
const uf = 34245;
const tasas =[0.05,0.0525,0.0555,0.0575];
const anios = [5,8,10,15];

//Función con las operaciones del Valor total del crédito, la Conversión de UF a peso, y el Valor de la Cuota Mensual//
function operar(operacion){
    if (operacion=="CreditoTotal"){
        return (a,b)=> a*(1+b)
    }else if (operacion=="Conversion"){
        return (a)=> a*uf
    }else if(operacion=="CuotaMensual"){
        return (a,b) => (a/b)/12
    }else if(operacion=="TasaInteres"){
        return (a)=> a*100
    }
}    

//Variables que contienen las funciones nacidas a partir de la función de orden superior//
let creditototal = operar("CreditoTotal");
let conversion = operar("Conversion");
let cuotamensual = operar("CuotaMensual");
let tasainteres = operar("TasaInteres");

//Función para aplicar el método de array's "Find"//
function condiciones(condicion){
    if(condicion=="a"){
        return (a)=> a>=(5/100)
    }else if (condicion=="b"){
        return (a)=> a>=(5.2/100)
    }else if (condicion=="c"){
        return (a)=> a>=(5.5/100)
    }else if (condicion=="d")
    return (a)=> a>=(5.7/100) 
}

//Control de submit, mediante Event//
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", credito);

//Función con el simulador del crédito, separado por rangos del valor del pie de la  vivienda//
function credito(e){
    e.preventDefault();
    let vivienda = parseInt(document.getElementById("vivienda").value);
    let pie = parseInt(document.getElementById("pie").value);
    if(pie>=(vivienda*0.2) && pie<=(vivienda*0.4)){
    respuestaSimuladora(vivienda);
    }else if(pie>=(vivienda*0.4) && pie<=(vivienda*0.6)){
    respuestaSimuladorb(vivienda);
    }else if(pie>=(vivienda*0.6) && pie<=(vivienda*0.8)){
    respuestaSimuladorc(vivienda);
    }else if(pie>=(vivienda*0.8)){
    respuestaSimuladord(vivienda); 
    }else{
    respuestaSimuladore(vivienda);
    }
}

//Variables con las condiciones creadas//
let casoa = condiciones ("a");
let casob = condiciones ("b");
let casoc = condiciones ("c");
let casod = condiciones ("d");

//Función que entrega mensajes sobre el primer escenario de la simulación, mediante DOM//
function respuestaSimuladora(vivienda){
    let respuestaSimulador1 = document.getElementById("respuesta-simulador1");
    let respuestaSimulador2 = document.getElementById("respuesta-simulador2");
    if(vivienda!=0){
        respuestaSimulador1.innerText = "Te ofrecemos un crédito hipotecario con un valor total de "+creditototal(vivienda,tasas[0])+" UF, equivalente a "+conversion(creditototal(vivienda,tasas[0]))+" pesos.";
        respuestaSimulador2.innerText = "Así, si solicitas un crédito con nosotros, este tendrá una duración de "+anios[3]+" años, una tasa de interes del "+tasainteres(tasas[0])+"%, y el valor mensual de las cuotas a pagar son de "+cuotamensual(conversion(creditototal(vivienda,tasas[0])),anios[3])+" pesos.";
    }else{
        respuestaSimulador1.remove();
        respuestaSimulador2.remove();
    }
}

//Función con la respuesta del segundo escenario, mediante DOM//
function respuestaSimuladorb(vivienda){
    let respuestaSimulador1 = document.getElementById("respuesta-simulador1");
    let respuestaSimulador2 = document.getElementById("respuesta-simulador2");
    if(vivienda!=0){
        respuestaSimulador1.innerText = "Te ofrecemos un crédito hipotecario con un valor total de "+creditototal(vivienda,tasas[1])+" UF, equivalente a "+conversion(creditototal(vivienda,tasas.find(casob)))+" pesos.";
        respuestaSimulador2.innerText = "Así, si solicitas un crédito con nosotros, este tendrá una duración de "+anios[2]+" años, una tasa de interes del "+tasainteres(tasas.find(casob))+"%, y el valor mensual de las cuotas a pagar son de "+cuotamensual(conversion(creditototal(vivienda,tasas.find(casob))),anios[2])+" pesos.";
    }else{
        respuestaSimulador1.remove();
        respuestaSimulador2.remove();
    }
}

//Función con la respuesta del tercer escenario, mediante DOM//
function respuestaSimuladorc(vivienda){
    let respuestaSimulador1 = document.getElementById("respuesta-simulador1");
    let respuestaSimulador2 = document.getElementById("respuesta-simulador2");
    if(vivienda!=0){
        respuestaSimulador1.innerText = "Te ofrecemos un crédito hipotecario con un valor total de "+creditototal(vivienda,tasas[2])+" UF, equivalente a "+conversion(creditototal(vivienda,tasas.find(casoc)))+" pesos.";
        respuestaSimulador2.innerText = "Así, si solicitas un crédito con nosotros, este tendrá una duración de "+anios[1]+" años, una tasa de interes del "+tasainteres(tasas.find(casoc))+"%, y el valor mensual de las cuotas a pagar son de "+cuotamensual(conversion(creditototal(vivienda,tasas.find(casoc))),anios[1])+" pesos."; 
    }else{
        respuestaSimulador1.remove();
        respuestaSimulador2.remove();
    }
}

//Función con la respuesta del cuarto escenario, mediante DOM//
function respuestaSimuladord(vivienda){
    let respuestaSimulador1 = document.getElementById("respuesta-simulador1");
    let respuestaSimulador2 = document.getElementById("respuesta-simulador2");
    if(vivienda!=0){
        respuestaSimulador1.innerText = "Te ofrecemos un crédito hipotecario con un valor total de "+creditototal(vivienda,tasas[3])+" UF, equivalente a "+conversion(creditototal(vivienda,tasas.find(casod)))+" pesos.";
        respuestaSimulador2.innerText = "Así, si solicitas un crédito con nosotros, este tendrá una duración de "+anios[0]+" años, una tasa de interes del "+tasainteres(tasas.find(casod))+"%, y el valor mensual de las cuotas a pagar son de "+cuotamensual(conversion(creditototal(vivienda,tasas.find(casod))),anios[0])+" pesos.";
    }else{
        respuestaSimulador1.remove();
        respuestaSimulador2.remove();
    }
}

//Función con la respuesta de rechazo, mediante DOM//
function respuestaSimuladore(vivienda){
    let credito = document.getElementById("credito_main");
    let respuestaSimulador1 = document.createElement("p");
    respuestaSimulador1.innerText = "Lo siento, pero si no tienes un pie mayor o igual al 20%, no es posible solicitar un crédito hipotecario con nosotros.";
    credito.appendChild(respuestaSimulador1);
}

//Función para borrar la respuesta del sitio//
let borrarFormulario = document.getElementById("formulario");
borrarFormulario.addEventListener("reset", borrar)
function borrar(){
    respuestaSimuladora(0);
}

