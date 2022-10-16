//Simulador de crédito hipotecario//
// Array con las tasas de interés, constante del valor de la UF, en CLP; y Array con los años de duración del crédito//
const uf = 34245;
const tasas =[0.05,0.0525,0.0555,0.0575];
const anios = [5,8,10,15];

//Función con las operaciones del Valor total del crédito, la Conversión de UF a peso, y el Valor de la Cuota Mensual//
function operaciones(operacion){
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
let creditototal = operaciones("CreditoTotal");
let conversion = operaciones("Conversion");
let cuotamensual = operaciones("CuotaMensual");
let tasainteres = operaciones("TasaInteres");

//Saludo al usuario (Los modales hacen al programa)//
let nombre = prompt("Hola, ingresa tu nombre");
alert("Saludos "+nombre);

//Función con el simulador del crédito, separado por rangos del valor del pie de la  vivienda//
function credito(){
do {
    vivienda = parseInt(prompt("Ingresa el valor de la vivienda en UF"));
    pie =parseInt(prompt("Ingresa el pie que tienes para la vivienda en UF. Recuerda que 1 Uf equivale a "+uf+" pesos"));
    if(pie>=(vivienda*0.2) && pie<=(vivienda*0.4)){
        alert("Te ofrecemos un crédito hipotecario con un valor total de "+creditototal(vivienda,tasas[0])+"UF, equivalente a "+conversion(creditototal(vivienda,tasas[0]))+" pesos.");
        alert("Así, si solicitas un crédito con nosotros, este tendrá una duración de "+anios[3]+" años, una tasa de interes del "+tasainteres(tasas[0])+"%, y el valor mensual de las cuotas a pagar son de "+cuotamensual(conversion(creditototal(vivienda,tasas[0])),anios[3])+" pesos.");
    }else if(pie>=(vivienda*0.4) && pie<=(vivienda*0.6)){
        alert("Te ofrecemos un crédito hipotecario con un valor total de "+creditototal(vivienda,tasas[1])+"UF, equivalente a "+conversion(creditototal(vivienda,tasas[1]))+" pesos.");
        alert("Así, si solicitas un crédito con nosotros, este tendrá una duración de "+anios[2]+" años, una tasa de interes del "+tasainteres(tasas[1])+"%, y el valor mensual de las cuotas a pagar son de "+cuotamensual(conversion(creditototal(vivienda,tasas[1])),anios[2])+" pesos.");
    }else if(pie>=(vivienda*0.6) && pie<=(vivienda*0.8)){
        alert("Te ofrecemos un crédito hipotecario con un valor total de "+creditototal(vivienda,tasas[2])+"UF, equivalente a "+conversion(creditototal(vivienda,tasas[2]))+" pesos.");
        alert("Así, si solicitas un crédito con nosotros, este tendrá una duración de "+anios[1]+" años, una tasa de interes del "+tasainteres(tasas[2])+"%, y el valor mensual de las cuotas a pagar son de "+cuotamensual(conversion(creditototal(vivienda,tasas[2])),anios[1])+" pesos.");
    }else if(pie>=(vivienda*0.8)){
        alert("Te ofrecemos un crédito hipotecario con un valor total de "+creditototal(vivienda,tasas[3])+"UF, equivalente a "+conversion(creditototal(vivienda,tasas[3]))+" pesos.");
        alert("Así, si solicitas un crédito con nosotros, este tendrá una duración de "+anios[0]+" años, una tasa de interes del "+tasainteres(tasas[3])+"%, y el valor mensual de las cuotas a pagar son de "+cuotamensual(conversion(creditototal(vivienda,tasas[3])),anios[0])+" pesos."); 
    }else{
        alert("Lo siento, pero si no tienes un pie mayor o igual al 20%, no es posible solicitar un crédito hipotecario con nosotros.");
    }
    respuesta = confirm("Esa es la opción de crédito hipotecario que tenemos para tí. ¿Aceptas?, ¿O deseas realizar otra simulación?");
} while (respuesta !=false)
}
credito();