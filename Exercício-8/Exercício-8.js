alert("Exercício 8: Programa para  o cálculo do volume de uma lata de óleo, dado seu raio e sua altura.")
let raio_lata = Number(prompt("Insira o valor númerico do raio da lata."))
let altura_lata = Number(prompt("Insira o valor númerico da altura da lata."))

let volume_lata = (Math.PI * (raio_lata ** 2)) * altura_lata //Volume do cilindro = área da base * altura
alert("O volume de uma lata de " + raio_lata + " de raio e " + altura_lata + " de altura" + " é:\n" + volume_lata)