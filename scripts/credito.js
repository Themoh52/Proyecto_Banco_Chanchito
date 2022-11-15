//Simulador de crédito hipotecario//
// Array con las tasas de interés, constante del valor de la UF, en CLP; y Array con los años de duración del crédito//
const uf = 34245;
const url = '../json/credito.json';

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

//Función para aplicar el método de array's "find"//
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

//Variables con las condiciones creadas para aplicar el método de de array's "find"//
let casoa = condiciones ("a");
let casob = condiciones ("b");
let casoc = condiciones ("c");
let casod = condiciones ("d");

//Función que entrega la respuesta positiva al usuario//
function Positiva(vivienda,datosTasas,datosAnios){
    Swal.fire({
        title: '¡Genial!',
        text: `Estos son los detalles del crédito hipotecario: \nValor crédito: ${creditototal(vivienda,datosTasas)} Uf. \nValor crédito en pesos: ${conversion(creditototal(vivienda,datosTasas))} pesos. \nDuración crédito: ${datosAnios} años. \n Tasa interés: ${tasainteres(datosTasas)}% \nValor cuota mensual: ${cuotamensual(conversion(creditototal(vivienda,datosTasas)),datosAnios)} pesos.`,
        icon: 'success',
        confirmButtonText: '¡Entendido!',
    })  
}

//Función que contiene la respuesta negativa al usuario//
 function negativo(){
 Swal.fire({
    title: '¡Error!',
    text: `Si no ingresas valores mayores a 0, no puedes comenzar la simulación.`,
    icon: 'error',
    confirmButtonText: 'Entiendo',
})}


//Control del submit, mediante Events//
let formulario = document.getElementById("form");
formulario.addEventListener("submit", credito);

//Función con el simulador del crédito, separado por rangos del valor del pie de la vivienda//
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

//Función que entrega la respuesta el primer escenario de la simulación, mediante DOM//
function respuestaSimuladora(vivienda){
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(data=>
        {
        const datosTasas= data.tasas;
        const datosAnios= data.anios;
        vivienda!=0 ? Positiva(vivienda,datosTasas.find(casoa),datosAnios[3]) : negativo()    
        }
    )
}

//Función con la respuesta del segundo escenario, mediante DOM//
function respuestaSimuladorb(vivienda){
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(data=>
        {
        const datosTasas= data.tasas;
        const datosAnios= data.anios;        
        vivienda!=0 ? Positiva(vivienda,datosTasas.find(casob),datosAnios[2]) : negativo()
        }
    )
}

//Función con la respuesta del tercer escenario, mediante DOM//
function respuestaSimuladorc(vivienda){
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(data=>    
        {
        const datosTasas= data.tasas;
        const datosAnios= data.anios;
        vivienda!=0 ? Positiva(vivienda,datosTasas.find(casoc),datosAnios[1]) : negativo()
        }
    )
}

//Función con la respuesta del cuarto escenario, mediante DOM//
function respuestaSimuladord(vivienda){
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(data=>  
        {
        const datosTasas= data.tasas;
        const datosAnios= data.anios;        
        vivienda!=0 ? Positiva(vivienda,datosTasas.find(casod),datosAnios[0]) : negativo()
        }
    )
}

//Función con la respuesta de rechazo, mediante DOM//
function respuestaSimuladore(vivienda){
    if(vivienda!=0){
        Swal.fire({
            title: 'Lo siento',
            text: `Pero si el valor de tu pie no es mayor al 20% del valor de la vivienda, no puedes 
            contrar un crédito hipotecario con nosotros.`,
            icon: 'warning',
            confirmButtonText: 'Entiendo',
        })
    }
}



