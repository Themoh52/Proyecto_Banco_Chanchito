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
let formulario = document.getElementById("form");
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
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(respuesta=> 
        {if(vivienda!=0){
            Swal.fire({
                title: '¡Genial!',
                text: `Estos son los detalles del crédito hipotecario: \nValor crédito: ${creditototal(vivienda,tasas.find(casoa))} Uf. \nValor crédito en pesos: ${conversion(creditototal(vivienda,tasas.find(casoa)))} pesos. \nDuración crédito: ${anios[3]} años. \n Tasa interés: ${tasainteres(tasas.find(casoa))}% \nValor cuota mensual: ${cuotamensual(conversion(creditototal(vivienda,tasas.find(casoa))),anios[3])} pesos.`,
                icon: 'success',
                confirmButtonText: '¡Entendido!',
            })
        }else{
            Swal.fire({
                title: '¡Error!',
                text: `Si no ingresas valores mayores a 0, no puedes comenzar la simulación.`,
                icon: 'error',
                confirmButtonText: 'Entiendo',
            })
        }
        }
    )
    .catch(console.log(Error));
}
//Función con la respuesta del segundo escenario, mediante DOM//
function respuestaSimuladorb(vivienda){
    fetch(url)
    if(vivienda!=0){
        Swal.fire({
            title: '¡Genial!',
            text: `Estos son los detalles del crédito hipotecario: \nValor crédito: ${creditototal(vivienda,tasas.find(casob))} Uf. \nValor crédito en pesos: ${conversion(creditototal(vivienda,tasas.find(casob)))} pesos. \nDuración crédito: ${anios[2]} años. \n Tasa interés: ${tasainteres(tasas.find(casob))}% \nValor cuota mensual: ${cuotamensual(conversion(creditototal(vivienda,tasas.find(casob))),anios[2])} pesos.`,
            icon: 'success',
            confirmButtonText: '¡Entendido!',
        })
    }else{
        Swal.fire({
            title: '¡Error!',
            text: `Si no ingresas valores mayores a 0, no puedes comenzar la simulación.`,
            icon: 'error',
            confirmButtonText: 'Entiendo',
        })
    }
}

//Función con la respuesta del tercer escenario, mediante DOM//
function respuestaSimuladorc(vivienda){
    fetch(url)
    if(vivienda!=0){
        Swal.fire({
            title: '¡Genial!',
            text: `Estos son los detalles del crédito hipotecario: \nValor crédito: ${creditototal(vivienda,tasas.find(casoc))} Uf. \nValor crédito en pesos: ${conversion(creditototal(vivienda,tasas.find(casoc)))} pesos. \nDuración crédito: ${anios[1]} años. \n Tasa interés: ${tasainteres(tasas.find(casoc))}% \nValor cuota mensual: ${cuotamensual(conversion(creditototal(vivienda,tasas.find(casoc))),anios[1])} pesos.`,
            icon: 'success',
            confirmButtonText: '¡Entendido!',
        }) 
    }else{
        Swal.fire({
            title: '¡Error!',
            text: `Si no ingresas valores mayores a 0, no puedes comenzar la simulación.`,
            icon: 'error',
            confirmButtonText: 'Entiendo',
        })
    }
}

//Función con la respuesta del cuarto escenario, mediante DOM//
function respuestaSimuladord(vivienda){
    fetch(url)
    if(vivienda!=0){
        Swal.fire({
            title: '¡Genial!',
            text: `Estos son los detalles del crédito hipotecario: \nValor crédito: ${creditototal(vivienda,tasas.find(casod))} Uf. \nValor crédito en pesos: ${conversion(creditototal(vivienda,tasas.find(casod)))} pesos. \nDuración crédito: ${anios[0]} años. \n Tasa interés: ${tasainteres(tasas.find(casod))}% \nValor cuota mensual: ${cuotamensual(conversion(creditototal(vivienda,tasas.find(casod))),anios[0])} pesos.`,
            icon: 'success',
            confirmButtonText: '¡Entendido!',
        })
    }else{
        Swal.fire({
            title: '¡Error!',
            text: `Si no ingresas valores mayores a 0, no puedes comenzar la simulación.`,
            icon: 'error',
            confirmButtonText: 'Entiendo',
        })
    }
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
    }else{
        Swal.fire({
            title: '¡Error!',
            text: `Si no ingresas valores mayores a 0, no puedes comenzar la simulación.`,
            icon: 'error',
            confirmButtonText: 'Entiendo',
        })
    }
}



