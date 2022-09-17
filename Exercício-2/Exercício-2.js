alert("Exercício 2: Programa para cálculo da área e perímetro do quadrado")
alert("Lembre-se que os valores devem estar na mesma unidade, o cálculo será feito numericamente apenas.")
let lado_quadrado = Number(prompt("Insira o valor númerico para o lado do quadrado."))

let area_quadrado = lado_quadrado ** 2 
let perimetro_quadrado = (4 * lado_quadrado)

alert("A área e perímetro para o quadrado de lado " + lado_quadrado + " é \nÁrea=" + area_quadrado + "\nPerímetro=" + perimetro_quadrado)

console.log(typeof lado_quadrado)
console.log(typeof area_quadrado)
console.log(typeof perimetro_quadrado)