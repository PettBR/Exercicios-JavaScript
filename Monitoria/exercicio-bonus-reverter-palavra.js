// usando o que conhecemos até agora, escreva um programa que receba um string e te devolva ela ao contrário 
// revertePalavra('palavra') → arvalap 

function revertePalavra(string) {
    let novaString = "";
    let tamPalavra = (string.length - 1);
    for (let i = tamPalavra; i >= 0; i--) {
        novaString += (string[i]);
    }
    return novaString;
}   

    console.log(revertePalavra('teste'))




    // novaString.push(string[i]); não funciona