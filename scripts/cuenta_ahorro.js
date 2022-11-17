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

//Función que contiene la parte positiva de la respeusta del simulador//
function positivo(sueldo,datosTasas){
    Swal.fire({
        title: '¡Genial!',
        text: `Estos son los detalles de la cuenta de ahorro que te ofrecemos: \nTasa de interés: ${tasainteres(datosTasas)}%. \nValor incremento mensual: ${incremento(sueldo,datosTasas)} pesos.`,
        icon: 'success',
        confirmButtonText: '¡Entendido!',
    }).then((result)=> {
        if(result.isConfirmed) {
            Swal.fire({
                title: 'Ahora,',
                text: "Esta es la cuenta de ahorro que ofrecemos. ¿Deseas abrir una o realizar otra simulación?",
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Abrir cuenta',
                cancelButtonText: 'Realizar otra simuación'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: '¡Bien!',
                    text: 'Para eso, primero debes iniciar sesión en tu cuenta',
                    confirmButtonText: '<a href="../pages/ingresa_aqui.html">Ingresa aquí</a>'
                  })
                }
              })
            }
        }
    )
}

//Función que contiene la parte negativa de la respuesta del simulador
function negativo(){
    Swal.fire({
        title: '¡Error!',
        text: `Si no ingresas valores mayores a 0, no puedes comenzar la simulación.`,
        icon: 'error',
        confirmButtonText: 'Entiendo',
    })
}

//Función que entrega la respuesta sobre el primer escenario de la simulación, mediante DOM//
function respuestaSimuladora(sueldo){
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(data=>
        { 
        const datosTasas= data.tasas;   
        sueldo!=0 ? positivo(sueldo,datosTasas.find(casod)) : negativo()
        }
    )
}

//Función que entrega la respuesta sobre el segundo escenario de la simulación, mediante DOM//
function respuestaSimuladorb(sueldo){
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(data=>
        { 
        const datosTasas= data.tasas;     
        sueldo!=0 ? positivo(sueldo,datosTasas.find(casoc)) : negativo()
        }
    )
}

//Función que entrega la respuesta sobre el tercer escenario de la simulación, mediante DOM//
function respuestaSimuladorc(sueldo){
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(data=>
        { 
        const datosTasas= data.tasas;     
        sueldo!=0 ? positivo(sueldo,datosTasas.find(casob)) : negativo()
        }
    )
}

//Función que entrega la respuesta sobre el cuarto escenario de la simulación, mediante DOM//
function respuestaSimuladord(sueldo){
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(data=>
        { 
        const datosTasas= data.tasas;     
        sueldo!=0 ? positivo(sueldo,datosTasas.find(casoa)) : negativo()
        }
    )
}

//Función que entrega mensajes sobre el escenario de rechazo de la simulación, mediante DOM//
function respuestaSimuladore(sueldo){
    if(sueldo!=0){
        Swal.fire({
            title: 'Lo siento!',
            text: `Lo siento, pero si tu sueldo no es mayor a $450.000, no puedes abrir una cuenta de ahorro con nosotros.`,
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
