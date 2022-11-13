//Simulador de cuenta de ahorro//
//Constante con el enlace de la ubicación del archivo "ahorro.json"//
const url = '../json/ahorro.json'

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
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(data=>
        { 
        const datosTasas= data.tasas;   
        if(sueldo!=0){
            Swal.fire({
                title: '¡Genial!',
                text: `Estos son los detalles de la cuenta de ahorro que te ofrecemos: \nTasa de interés: ${tasainteres(datosTasas.find(casod))}%. \nValor incremento mensual: ${incremento(sueldo,datosTasas.find(casod))} pesos.`,
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
}

//Función que entrega mensajes sobre el segundo escenario de la simulación, mediante DOM//
function respuestaSimuladorb(sueldo){
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(data=>
        { 
        const datosTasas= data.tasas;     
        if(sueldo!=0){
        Swal.fire({
            title: '¡Genial!',
            text: `Estos son los detalles de la cuenta de ahorro que te ofrecemos: \nTasa de interés: ${tasainteres(datosTasas.find(casoc))}%. \nValor incremento mensual: ${incremento(sueldo,datosTasas.find(casoc))} pesos.`,
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
        }})
}

//Función que entrega mensajes sobre el tercer escenario de la simulación, mediante DOM//
function respuestaSimuladorc(sueldo){
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(data=>
        { 
        const datosTasas= data.tasas;     
        if(sueldo!=0){
        Swal.fire({
            title: '¡Genial!',
            text: `Estos son los detalles de la cuenta de ahorro que te ofrecemos: \nTasa de interés: ${tasainteres(datosTasas.find(casob))}%. \nValor incremento mensual: ${incremento(sueldo,datosTasas.find(casob))} pesos.`,
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
    }})
}

//Función que entrega mensajes sobre el cuarto escenario de la simulación, mediante DOM//
function respuestaSimuladord(sueldo){
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(data=>
        { 
        const datosTasas= data.tasas;     
        if(sueldo!=0){
        Swal.fire({
            title: '¡Genial!',
            text: `Estos son los detalles de la cuenta de ahorro que te ofrecemos: \nTasa de interés: ${tasainteres(datosTasas.find(casoa))}%. \nValor incremento mensual: ${incremento(sueldo,datosTasas.find(casoa))} pesos.`,
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
        }})
}

//Función que entrega mensajes sobre el escenario de rechazo de la simulación, mediante DOM//
function respuestaSimuladore(sueldo){
    if(sueldo!=0){
        Swal.fire({
            title: 'Lo siento!',
            text: `Lo siento, pero tu sueldo no es suficiente para abrir una cuenta de ahorro con nosotros.`,
            icon: 'warning',
            confirmButtonText: 'Entendido',
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

let formulario = document.getElementById("form");
formulario.addEventListener("submit", ahorro);

//Función de cuenta de ahorro//
function ahorro(e){
    e.preventDefault();
    sueldo = parseInt(document.getElementById("sueldo").value);
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(data=>
    {
    const dataRangos = data.rangos;
    if(sueldo>=dataRangos[0] && sueldo<=dataRangos[1]){
        respuestaSimuladora(sueldo);
    }else if(sueldo>=dataRangos[1] && sueldo<=dataRangos[2]){
        respuestaSimuladorb(sueldo);
    }else if(sueldo>=dataRangos[2] && sueldo<=dataRangos[3]){
        respuestaSimuladorc(sueldo);
    }else if(sueldo>=dataRangos[3]){
        respuestaSimuladord(sueldo); 
    }else{
        respuestaSimuladore();
    }
    }
    )
}
