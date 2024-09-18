const pessoa1 = {
    nome: "pessoa 1",
    Idade: 20,
    hobbies: ["jogar", "assistir tv", "programar"]
}

console.log(pessoa1.nome)

pessoa1.cpf = 1234567 // adicionando esse cpf em pessoa1 (não fazer dessa forma)

pessoa1.hobbies.push("outra atividade") // Adicionando "outra atividade" no array de hobbies

console.log(pessoa1)

function criarPessoa(nome, idade, hobbies){
    return{
        nome,
        idade,
        hobbies
    }
}

const pessoa2 = criarPessoa("nome2", 25, "a", "b", "c")
console.log(JSON.stringify(pessoa2)) // Transforma em JSON (string)
const pessoaJson = JSON.parse('{"nome":"Nome1","idade":25,"hobbie":["a","b","c"]}') // Transforma JSON em JS
console.log(pessoaJson);

class Pessoa {
    constructor (nome, idade, hobbies){
        this.nome = nome
        this.idade = idade
        this.hobbies = hobbies
    }

    meApresentar(){
        console.log(`Olá, meu nome é ${this.nome}`);
    }

    anoNascimento(){
        return console.log(2024 - this.idade)
    }
}

const pessoa3 = new Pessoa("João", 19, ["Ouvir música", "Jogar", "Assistir"])
console.log(pessoa3);
pessoa3.meApresentar()
pessoa3.anoNascimento()