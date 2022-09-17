alert("Exercício 3: Programa para cálculo da área e perímetro da circunferência")
alert("Lembre-se que os valores devem estar na mesma unidade, o cálculo será feito numericamente apenas.")

let raio_circulo = Number(prompt("Insira o valor númerico para o raio do circulo."))
let area_circulo = Math.PI * (raio_circulo ** 2) 
let perimetro_circulo = (2 * Math.PI * raio_circulo)

alert("A área e perímetro para o circulo de raio " + raio_circulo + " é \nÁrea=" + area_circulo + "\nPerímetro=" + perimetro_circulo)

console.log(typeof raio_circulo)
console.log(typeof area_circulo)
console.log(typeof perimetro_circulo)