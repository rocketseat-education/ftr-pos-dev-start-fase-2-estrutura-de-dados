class Fila {
  constructor() {
    this.items = [];
  }

  enfileirar(item) {
    this.items.push(item);
  }

  desenfileirar() {
    if (this.estaVazia()) {
      return "A fila está vazia";
    }
    return this.items.shift();
  }

  frente() {
    if (this.estaVazia()) {
      return "The queue is empty";
    }
    return this.items[0];
  }

  estaVazia() {
    return this.items.length === 0;
  }

  tamanho() {
    return this.items.length;
  }
}

export default Fila;
