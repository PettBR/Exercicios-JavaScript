alert("Exercício 1: Programa para cálculo da área e perímetro do retângulo")
alert("Lembre-se que os valores devem estar na mesma unidade, o cálculo será feito numericamente apenas.")
let base_retangulo = Number(prompt("Insira o valor númerico para a base do retângulo."))
let altura_retangulo = Number(prompt("Agora insira o valor numérico para a altura"))
let area_retangulo = base_retangulo * altura_retangulo
let perimetro_retangulo = (2 * base_retangulo + 2 * altura_retangulo)
alert("A área e perímetro para o retângulo de base " + base_retangulo + " e altura " + altura_retangulo + " é \nÁrea=" + area_retangulo + "\nPerímetro=" + perimetro_retangulo)

//Isso aqui embaixo é desnecessário, só para ter certeza que as variáveis declaradas são todas do tipo número:
console.log(typeof base_retangulo) //Apenas como teste para verificar se os valores são do tipo número
console.log(typeof altura_retangulo) //Apenas como teste para verificar se os valores são do tipo número
console.log(typeof area_retangulo) //Apenas como teste para verificar se os valores são do tipo número
console.log(typeof perimetro_retangulo) //Apenas como teste para verificar se os valores são do tipo número
