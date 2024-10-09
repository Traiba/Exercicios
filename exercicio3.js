const fs = require('fs')

function carregarDados() {
  const dados = fs.readFileSync('dados.json', 'utf-8')
  return JSON.parse(dados)
}

function calcularFaturamento(dados) {
  let menorFaturamento = Number.MAX_VALUE
  let maiorFaturamento = Number.MIN_VALUE
  let somaFaturamento = 0
  let diasComFaturamento = 0
  let diasAcimaDaMedia = 0

  for (let i = 0; i < dados.length; i++) {
    const valor = dados[i].valor

    if (valor > 0) {
      if (valor < menorFaturamento) {
        menorFaturamento = valor
      }

      if (valor > maiorFaturamento) {
        maiorFaturamento = valor
      }

      somaFaturamento += valor
      diasComFaturamento++
    }
  }

  const mediaFaturamento = somaFaturamento / diasComFaturamento

  for (let i = 0; i < dados.length; i++) {
    const valor = dados[i].valor

    if (valor > mediaFaturamento) {
      diasAcimaDaMedia++
    }
  }

  return {
    menorFaturamento,
    maiorFaturamento,
    diasAcimaDaMedia,
  }
}

function main() {
  const dados = carregarDados()
  const resultado = calcularFaturamento(dados)

  console.log(
    `Menor valor de faturamento: R$ ${resultado.menorFaturamento.toFixed(2)}`
  )
  console.log(
    `Maior valor de faturamento: R$ ${resultado.maiorFaturamento.toFixed(2)}`
  )
  console.log(
    `Número de dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`
  )
}

main()