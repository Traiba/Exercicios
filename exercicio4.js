const faturamento = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

let total = 0;
for(let valor in faturamento){
    total += faturamento[valor];
}
console.log("O porcentual de cada estado foi:")
for(let valor in faturamento){
    let porcentagem = (faturamento[valor]/total) * 100;
    console.log(`${valor} : ${porcentagem.toFixed(2)}`);
}
