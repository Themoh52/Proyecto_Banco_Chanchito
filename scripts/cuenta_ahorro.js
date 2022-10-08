//Simulador de cuenta de ahorro//
const sueldoa = 450000;
const sueldob = 650000;
const sueldoc = 850000;
const sueldod = 1250000;
const rangos = [450000,650000,850000,1250000];

let nombre = prompt("Hola, ingresa tu nombre");
alert("Saludos "+nombre);
let sueldo = 0;
function ahorro(){
do {
    sueldo = parseInt(prompt("Ingresa tu sueldo"));
    if(sueldo>=sueldoa && sueldo<=sueldob){
        let tasaa = 0.2;
        let incrementoa = sueldo*tasaa;
        alert("Te ofrecemos una cuenta de ahorro con una tasa de interés del "+(tasaa*100)+"%");
        alert("Así, si depositas su sueldo con nosotros, mensualmente tus fondos tendrán un incremento equivalente a "+incrementoa);
    }else if(sueldo>=sueldob && sueldo<=sueldoc){
        let tasab = 0.15;
        let incrementob = sueldo*tasab;
        alert("Te ofrecemos una cuenta de ahorro con una tasa de interés del "+(tasab*100)+"%");
        alert("Así, si depositas su sueldo con nosotros, mensualmente tus fondos tendrán un incremento equivalente a "+incrementob);
    }else if(sueldo>=sueldoc && sueldo<=sueldod){
        let tasac = 0.1;
        let incrementoc = sueldo*tasac;
        alert("Te ofrecemos una cuenta de ahorro con una tasa de interés del "+(tasac*100)+"%");
        alert("Así, si depositas su sueldo con nosotros, mensualmente tus fondos tendrán un incremento equivalente a "+incrementoc); 
    }else if(sueldo>=sueldod){
        let tasad = 0.05;
        let incrementod = sueldo*tasad;
        alert("Te ofrecemos una cuenta de ahorro con una tasa de interés del "+(tasad*100)+"%");
        alert("Así, si depositas su sueldo con nosotros, mensualmente tus fondos tendrán un incremento equivalente a "+incrementod); 
    }else{
        alert("Lo siento, pero tu sueldo no es suficiente para abrir una cuenta de ahorro con nosotros.");
    }
    respuesta = confirm("Y esa es la opción de cuenta de ahorro que tenemos para tí. ¿Quieres realizar otra simulación? ");;
} while (respuesta !=false)
}
ahorro();