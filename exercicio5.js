function inverterString(str) {
    let stringInvertida = "";

    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }

    return stringInvertida;
}

const stringEntrada = "melancia"; 

console.log("Palavra: " + stringEntrada);
console.log("Palavra invertida: " + inverterString(stringEntrada));