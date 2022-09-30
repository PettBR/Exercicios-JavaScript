/** 
 * A pedido.
 *1- crie um programa que retorne a soma de 2 números;
    somaDois(2,2) ➞ 4
2- crie um programa que conte o numero de vogais em uma palavra.
    contaVogais('animais') ➞ 4
 */

function somaDois(num, num2){
    return num + num2
    };

    let num1 = parseFloat(prompt('numero 1'))
    let num2 = parseFloat(prompt('numero 2'))
    document.write(`<p>Soma dos números ${num1} + ${num2} = ${somaDois(num1,num2)}</p>`);
    
    /**
     * Contagem de vogais método 1: na raça
     */

    function contaVogais(palavra) {
        let vogais = [];
        console.log(palavra)
        const numLetras = palavra.length;
        for (let i = 0; i < numLetras; i++) {
            if (palavra[i].match(/[aeiou]/gi)){
                vogais.push(palavra[i]);
            }
            console.log(numLetras)
        }
        console.log(vogais)
        return vogais
    }

    
    let palavra = prompt('Digite uma palavra');

    let resultVogais = contaVogais(palavra)
document.write(`<p>Tem ${resultVogais.length} vogais na palavra "${palavra}". São elas: ${resultVogais.join(' ,')}</p>`);


    // // Método 2 - pesquisei um outro mais direto
    // const vowelCount = str => {
    //     let vowels = /[aeiou]/gi;
    //     let result = str.match(vowels);
    //     let count = result.length;
      
    //     console.log(count);
    //   };