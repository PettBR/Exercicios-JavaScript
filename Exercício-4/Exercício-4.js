alert("Exercício 4: Programa para cálculo da área e perímetro de um triângulo a partir de seus 3 lados")
alert("Lembre-se que os valores devem estar na mesma unidade, o cálculo será feito numericamente apenas.")

let lado_triangulo_a = Number(prompt("Insira o valor númerico para o primeiro lado do triangulo."))
let lado_triangulo_b = Number(prompt("Insira o valor númerico para o segundo lado do triangulo."))
let lado_triangulo_c = Number(prompt("Insira o valor númerico para o terceiro lado do triangulo."))
let perimetro_triangulo = lado_triangulo_a + lado_triangulo_b + lado_triangulo_c // perímetro = 2p = a+b+c

//Bônus: A área de um triângulo com 3 lados conhecidos pode ser calculada pela fórmula de Heron.
let semiperimetro_triangulo = (perimetro_triangulo / 2) //semiperimetro p= (a+b+c)/2
let area_triangulo = Math.sqrt(semiperimetro_triangulo * (semiperimetro_triangulo - lado_triangulo_a) * (semiperimetro_triangulo - lado_triangulo_b) * (semiperimetro_triangulo - lado_triangulo_c)) 
//A= sqrt( p(p−a)(p−b)(p−c) ) ou seja, a raiz quadrada de p(p−a)(p−b)(p−c)
alert ("A área e perímetro para o triângulo de lados " + lado_triangulo_a + " " + lado_triangulo_b + " " + lado_triangulo_c + " é \nÁrea=" + area_triangulo + "\nPerímetro=" + perimetro_triangulo)

