interface BiggestWord {value: string, length: number};

function biggestWord(phrase: string) {
    let biggestWord: BiggestWord = {value: "", length: 0};

    phrase
        .split(" ")
        . map( word => ({value: word, length:word.length}))
        .forEach((element) => {
            if(element.length > biggestWord.length) biggestWord = element
        });

    return biggestWord.value;
}
// Ejemplo
const statement1: string = "Esta frase puede contener muchas palabras";
const statement2: string = "Ejercicios básicos de JavaScript";

console.log("************** BIGGEST WORD *********************");
console.log(statement1);
console.log(biggestWord(statement1)); // "contener"
console.log(statement2);
console.log(biggestWord(statement2)); // "Ejercicios"