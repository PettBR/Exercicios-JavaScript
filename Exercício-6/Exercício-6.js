alert("Exercício 6: Programa para ler dois números inteiros e exibir o quociente e o resto da divisão inteira entre eles.") 
let numInt1 = Number(prompt("digite um numero inteiro"))
let numInt2 = Number(prompt("digite outro numero inteiro"))

let resultDiv = Math.floor(numInt1/numInt2)
let restoDiv = numInt1 % numInt2 
let resultDiv_real = Number(numInt1/numInt2) //Bônus: mostra o resultado da divisão no conjunto Real


alert("o resultado da divisão de " + numInt1 + " por " + numInt2 + " é:\n" + resultDiv + "\ne o resto da divisão é: " + restoDiv + "\nE o resultado da divisão no conjunto real é: " + resultDiv_real )