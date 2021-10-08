//Dada una frase cualquiera , pedir una letra del abc y contar cuantes veces se repite esa letra en la frase. Da igual que sea mayusculas o minisculas.

const countLetter = function (pSentence, pLetter) {
    let count = 0;
    for (let i = 0; i < pSentence.length; i++) {
        if (pSentence[i].toLowerCase() === pLetter.toLowerCase()) {
            count++;
        }
    }
    return count;

}

const countLetter2 = (pSentence, pLetter) => Array.from(pSentence).filter(letter => letter === pLetter).length;


//Dado una frase cualquiera, darle la vuelta a todas la palabras.
// Tony Stark -> Stark Tony

function reverseSentence(pSentence) {
    let array = pSentence.split(' ');
    let arrayInvertido = [...array].reverse();
    return arrayInvertido.join(" ");
}


//Dado un array de numeros negativos y positivos , devolver el array con los numeros que eran negativos convertidos a positivos y viceversa.
//[ -1,5,-4, 7] -> [ 1,-5,4, -7]


function changeSign(pArray) {

    const result = new Array();

    for (let item of pArray) {
        result.push(item * (-1))
    }

    return result
}

function changeSign2(pArray) {
    return pArray.map(item => item * (-1));
}




