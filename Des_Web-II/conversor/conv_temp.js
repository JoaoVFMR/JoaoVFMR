const promptSync = require('prompt-sync')
const prompt = promptSync()

let tempC = Number(prompt("Digite a temperatura em Graus Celsius: "))

let tempF = (tempC * 9/5) + 32

console.log(`A temperatura em Fahrenheit é: ${tempF}`)
