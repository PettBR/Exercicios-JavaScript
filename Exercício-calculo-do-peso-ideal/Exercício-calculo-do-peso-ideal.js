alert("Exercício cálculo do peso ideal: Programa para calcular o seu peso ideal");

const alturaDaPessoa = parseFloat(prompt("Qual a sua altura em metros?"))
if (isNaN(alturaDaPessoa)) {
    alert("Não é um valor válido. Digite um valor numérico em metros para a sua altura");
}else{
const sexoDaPessoa = prompt(`Qual o seu sexo?
Digite M para Masculino
Digite F para Feminino`).toUpperCase();

if(sexoDaPessoa == "M" || sexoDaPessoa == "MASCULINO" || sexoDaPessoa == "HOMEM"){
const pesoIdeal = ((72.7 * alturaDaPessoa) - 58);
alert(`Seu peso ideal é ${pesoIdeal.toFixed(2)}.`)
}else if (sexoDaPessoa == "F" || sexoDaPessoa == "FEMININO" || sexoDaPessoa == "MULHER"){
    const pesoIdeal = ((62.1 * alturaDaPessoa) - 44.7);
    alert(`Seu peso ideal é ${pesoIdeal.toFixed(2)}.`);
}else{alert("Você digitou um valor inválido para")}
}