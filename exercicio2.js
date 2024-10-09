function verificarFibonacci(num) {
    let n1 = 0;
    let n2 = 1;
    let aux = n1;
    if (num === 0 || num === 1) {
        return true;
    }
    while(aux <= num){
        aux = n2;
        n2 = n1 + n2;
        n1 = aux;
        if(n2 === num){
            return true;
        } 
    }
    return false;
}

const verNum = 6;

if(verificarFibonacci(verNum)) {
    console.log(`${verNum} está na sequencia Fibonacci!`);
}
else{
    console.log(`${verNum} não está na sequencia Fibonacci!`);
}

