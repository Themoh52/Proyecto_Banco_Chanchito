//Simulador de crédito hipotecario//
const tasaa = 0.05;
const tasab = 0.0525;
const tasac = 0.0555;
const tasad = 0.0575;
const uf = 34245;

let nombre = prompt("Hola, ingresa tu nombre");
alert("Saludos "+nombre);

function credito(){
do {
    vivienda = parseInt(prompt("Ingresa el valor de la vivienda en UF"));
    pie =parseInt(prompt("Ingresa el pie que tienes para la vivienda en UF. Recuerda que 1 Uf equivale a "+uf+" pesos"));
    if(pie>=(vivienda*0.2) && pie<=(vivienda*0.4)){
        let creditoa = vivienda*(1+tasaa);
        alert("Te ofrecemos un crédito hipotecario con una tasa de interés del "+(tasaa*100)+"%,\n con un plazo de pago de 15 años.");
        alert("Así, si solicitas un crédito con nosotros, este tendrá un valor total de "+creditoa+" Uf, equivalente a"+(uf*creditoa)+" pesos.\n El valor mensual de las cuotas a pagar son de "+(((uf*creditoa)/15)/12)+" pesos.");
    }else if(pie>=(vivienda*0.4) && pie<=(vivienda*0.6)){
        let creditob = vivienda*(1+tasab);
        alert("Te ofrecemos un crédito hipotecario con una tasa de interés del "+(tasab*100)+"%,\n con un plazo de pago de 10 años.");
        alert("Así, si solicitas un crédito con nosotros, este tendrá un valor total de "+creditob+" Uf, equivalente a"+(uf*creditob)+" pesos.\n El valor mensual de las cuotas a pagar son de "+(((uf*creditob))/10/12)+" pesos.");
    }else if(pie>=(vivienda*0.6) && pie<=(vivienda*0.8)){
        let creditoc = vivienda*(1+tasac);
        alert("Te ofrecemos un crédito hipotecario con una tasa de interés del "+(tasac*100)+"%,\n con un plazo de pago de 8 años.");
        alert("Así, si solicitas un crédito con nosotros, este tendrá un valor total de "+creditoc+" Uf, equivalente a"+(uf*creditoc)+" pesos.\n El valor mensual de las cuotas a pagar son de "+(((uf*creditoc)/8)/12)+" pesos."); 
    }else if(pie>=(vivienda*0.8)){
        let creditod = vivienda*(1+tasad);
        alert("Te ofrecemos un crédito hipotecario con una tasa de interés del "+(tasad*100)+"%,\n con un plazo de pago de 5 años.");
        alert("Así, si solicitas un crédito con nosotros, este tendrá un valor total de "+creditod+" Uf, equivalente a"+(uf*creditod)+" pesos.\n El valor mensual de las cuotas a pagar son de "+(((uf*creditod)/5)/12)+" pesos."); 
    }else{
        alert("Lo siento, pero si no tienes un pie mayor o igual al 20%, no es posible solicitar un crédito hipotecario con nosotros.");
    }
    respuesta = confirm("Y esa es la opción de crédito hipotecario que tenemos para tí. ¿Quieres realizar otra simulación?");
} while (respuesta !=false)
}
credito();