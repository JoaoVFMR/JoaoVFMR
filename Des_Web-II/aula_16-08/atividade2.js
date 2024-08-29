import PromptSync from "prompt-sync"
const prompt = PromptSync()

let numero = Number(prompt("Digite o valor da tabuada: "))
for (let i = 1; i < 11; i++){
    console.log(numero, "*", i, "=", numero * i)
}
