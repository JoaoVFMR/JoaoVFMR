function sacar(valor){
    let nota100 = Math.floor(valor / 100)
    valor = valor % 100

    let nota50 = Math.floor(valor / 50)
    valor = valor % 50

    let nota10 = Math.floor(valor / 10)
    valor = valor % 10

    if (valor % 10 !== 0) {
        return "Valor inválido. Insira um valor múltiplo de 10."    
    }

    return `Notas de 100: ${nota100}, Notas de 50: ${nota50}, Notas de 10: ${nota10}`
}

console.log(sacar(380));
console.log(sacar(70));
console.log(sacar(125));
console.log(sacar(500));