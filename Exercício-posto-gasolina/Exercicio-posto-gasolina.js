alert("Exercício posto de gasolina: Programa para ler o número de litros vendidos e o tipo de combustível")
// Um posto está vendendo combustíveis com a seguinte tabela de preços:
// Preencher depois--
//Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível(codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 2,70 e o preço do litro do álcool é R$ 1,90

const precoGasolina = 2.70
const precoAlcool = 1.90
console.log('Preço atual do álcool: ' + precoAlcool);
console.log('Preço atual da gasolina: ' + precoGasolina);
const quantidadeLitros = parseFloat(prompt("Digite a quantidade de Litros:"));
if (isNaN(quantidadeLitros)) {
    alert("Não é um valor válido. Digite um valor numérico para a quantidade de Litros");
}else{
const tipoCombustivel = prompt(`Digite o tipo de combustível,
'A' - para álcool 
'G' - para gasolina`).toUpperCase();
if(tipoCombustivel == 'A' || tipoCombustivel == "'A'"){
    if(quantidadeLitros > 25){
        const precofinal = quantidadeLitros * precoAlcool * 0.96;
        alert(`O valor total a ser pago é ${precofinal.toFixed(2)} reais.`);
    } else {
        const precofinal = quantidadeLitros * precoAlcool * 0.98;
        alert(`O valor total a ser pago é ${precofinal.toFixed(2)} reais.`);
    }
} else if(tipoCombustivel == 'G' || tipoCombustivel == "'G'"){
    if(quantidadeLitros > 25){
        const precofinal = quantidadeLitros * precoGasolina * 0.95;
        alert(`O valor total a ser pago é ${precofinal.toFixed(2)} reais.`);
    } else{
        const precofinal = quantidadeLitros * precoGasolina * 0.97;
        alert(`O valor total a ser pago é ${precofinal.toFixed(2)} reais.`);
    }
} else(alert("O valor digitado não é válido"))}