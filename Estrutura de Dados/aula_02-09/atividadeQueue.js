class Fila {
    constructor() {
      this.itens = []
    }
  
    enfileira(elemento) {
      this.itens.push(elemento)
    }
  
    desenfileira() {
      if (this.estaVazia()) {
        console.log("Fila vazia");
      }
      return this.itens.shift()
    }
  
    estaVazia() {
      return this.itens.length === 0
    }
  }
  
  class Pilha {
    constructor() {
      this.itens = []
    }
  
    empilha(elemento) {
      this.itens.push(elemento)
    }
  
    desempilha() {
      if (this.estaVazia()) {
        throw new Error('Pilha vazia')
      }
      return this.itens.pop()
    }
  
    estaVazia() {
      return this.itens.length === 0
    }
  }
  
  function inverteFila(fila) {
    const pilha = new Pilha()
  
    while (!fila.estaVazia()) {
      pilha.empilha(fila.desenfileira())
    }
  
    while (!pilha.estaVazia()) {
      fila.enfileira(pilha.desempilha())
    }
  }
  
  const minhaFila = new Fila()
  minhaFila.enfileira("1")
  minhaFila.enfileira("2")
  minhaFila.enfileira("3")
  minhaFila.enfileira("6")
  minhaFila.enfileira("2")
  minhaFila.enfileira("1")
  minhaFila.enfileira("6")
  minhaFila.enfileira("8")
  minhaFila.enfileira("10")
  minhaFila.enfileira("42")
  minhaFila.enfileira("1")
  minhaFila.enfileira("6")
  
  console.log('Fila original:', minhaFila.itens)
  
  inverteFila(minhaFila)
  
  console.log('Fila invertida:', minhaFila.itens)
  