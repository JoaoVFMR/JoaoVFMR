class Pessoa {
    constructor(nome, idade, email) {
        this.nome = nome
        this.idade = idade
        this.email = email
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu email é ${this.email}.`);
    }
}

const pessoa1 = new Pessoa(
    nome = "João",
    idade = 19,
    email = "joao.rocha34@fatec.sp.gov.br"
) 

console.log(pessoa1);
pessoa1.apresentar(pessoa1)
