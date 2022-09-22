
alert("Exercício cálculo do IMC (Índice de massa corporal)");

pesoAdulto = parseFloat(prompt(`Digite seu peso em kg`));
alturaAdulto = parseFloat(prompt(` Digite sua altura em metros`));
valorIMC = pesoAdulto/(alturaAdulto**2);

if (valorIMC < 18.5){
    alert(`Você está abaixo do peso, com um IMC de ${valorIMC}`);
}else if(valorIMC < 25){
    alert(`Você está com um peso normal, com um IMC de ${valorIMC}`);
}else if(valorIMC < 30){
    alert(`Você está acima do peso, com um IMC de ${valorIMC}`);
}else if(valorIMC >= 30){
    alert(`Você está obeso, com um IMC de ${valorIMC}`);
}