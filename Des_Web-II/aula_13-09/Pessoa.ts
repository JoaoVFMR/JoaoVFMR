// npm init -y (necessário para iniciar algum projeto)
// npm i -D typescript (instala o typescript)
// npx tsc --init (cria o tsconfig.json)
// npm instala pacotes, npx é para rodar/usar algum pacote/lib

export default class Pessoa{
    nome: string
    idade: number
    hobbies: string[]

    constructor(nome:string, idade:number, hobbies:string[]){
        this.nome = nome
        this.idade = idade
        this.hobbies = hobbies
    }
}

const pessoa1 = new Pessoa("João Vitor", 19, ["Ouvir música","Jogar", "Assistir"])
console.log(pessoa1);

// export default Pessoa (pode ser usado no final)