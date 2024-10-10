// commonjs
// const prompt = require("prompt-sync")()

import PromptSync from "prompt-sync"
const prompt = PromptSync()

let saldo = Number(prompt("Digite o saldo inicial: "))
const saldoDesejado = saldo * 3
const taxaMes = Number (prompt("Digite a taxa: "))
let qtdeMeses = 0

while (saldo < saldoDesejado){
    saldo = saldo + (saldo * taxaMes)
    qtdeMeses++
    console.log(`Mês ${qtdeMeses} - Saldo ${saldo}`)
}

console.log(`Total de meses ${qtdeMeses}`)