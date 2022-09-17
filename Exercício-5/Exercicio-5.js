alert("Exercício 5: Programa para ler um número inteiro e exibir o seu sucessor.") 

let num = parseInt((prompt("Digite um número inteiro para saber o seu sucessor!"))) //parseInt() é utilizado para um número inteiro, garantindo que caso eu digite um número com decimais como 4.5, apenas o 4 será considerado. 

//Se eu fizesse let num = Number(prompt("Digite algum número, por favor")) ao inserir 4.5 o resultado do alert será 5.5
 
alert("O sucessor do número " + num + " é:\n" + ++num)
