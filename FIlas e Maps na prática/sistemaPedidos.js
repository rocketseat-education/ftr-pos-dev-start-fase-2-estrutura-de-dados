let ultimoId = 0;

function fazerPedido(fila, cardapio, itensDoPedido) {
  ultimoId++;
  const pedido = {
    id: ultimoId,
    itens: [],
    valorTotal: 0,
  };

  for (const nomeItem of itensDoPedido) {
    if (cardapio.has(nomeItem)) {
      pedido.itens.push(nomeItem);
      pedido.valorTotal += cardapio.get(nomeItem);
    }
  }

  fila.enfileirar(pedido);
  console.log(`PEDIDO RECEBIDO: Pedido #${pedido.id} [${pedido.itens.join(", ")}]`);
}

export default fazerPedido;