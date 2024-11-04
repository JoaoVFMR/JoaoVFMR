"use strict";
// npm init -y (necessário para iniciar algum projeto)
// npm i -D typescript (instala o typescript)
// npx tsc --init (cria o tsconfig.json)
// npm instala pacotes, npx é para rodar/usar algum pacote/lib
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(nome, idade, hobbies) {
        this.nome = nome;
        this.idade = idade;
        this.hobbies = hobbies;
    }
}
exports.default = Pessoa;
const pessoa1 = new Pessoa("João Vitor", 19, ["Ouvir música", "Jogar", "Assistir"]);
console.log(pessoa1);
// export default Pessoa (pode ser usado no final)
