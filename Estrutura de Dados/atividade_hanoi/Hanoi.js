class Pilha {
    constructor() {
      this.items = []
    }
  
    push(element) {
      this.items.push(element)
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Pilha Vazia"
      }
      return this.items.pop()
    }
  
    peek() {
      return this.items[this.items.length - 1]
    }
  
    isEmpty() {
      return this.items.length === 0
    }
  
    print() {
      console.log(this.items)
    }
  }
  
  function torreHanoi(n, origem, destino, auxiliar) {
    if (n === 1) {
      destino.push(origem.pop())
      console.log(`Moveu o disco 1 da origem para o destino`)
      mostrarPilhas()
      return;
    }
    
    torreHanoi(n - 1, origem, auxiliar, destino)
  
    destino.push(origem.pop())
    console.log(`Moveu o disco ${n} da origem para o destino`)
    mostrarPilhas()
  
    torreHanoi(n - 1, auxiliar, destino, origem)
  }
  
  function mostrarPilhas() {
    console.log('Pilha 1:', p1.items)
    console.log('Pilha 2:', p2.items)
    console.log('Pilha 3:', p3.items)
    console.log('---')
  }
  
  let p1 = new Pilha()
  let p2 = new Pilha()
  let p3 = new Pilha()
  
  p1.push(3)
  p1.push(2)
  p1.push(1)
  
  mostrarPilhas()
  
  torreHanoi(3, p1, p3, p2)
