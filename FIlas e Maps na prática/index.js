import Fila from "./Fila.js";
import menu from "./menu.js";
import fazerPedido from "./sistemaPedidos.js";

console.log("------------------ CARDÁPIO DA LANCHONETE -----------------");
menu.forEach((preco, item) => {
    console.log(`${item} ..... R$ ${preco.toFixed(2)}`);
});
console.log("\n");

const filaDePedidos = new Fila();
fazerPedido(filaDePedidos, menu, ["X-Tudo", "Refrigerante"]);
fazerPedido(filaDePedidos, menu, ["Veggie Burger"]);
fazerPedido(filaDePedidos, menu, ["Batata Frita G", "Milk-shake"]);
console.log("\n");

console.log("--- FIla de pedidos antes do preparo ---");
console.log(filaDePedidos.itens);
console.log("\n");

console.log("--- Cozinha iniciando o preparo dos pedidos ---");
while (!filaDePedidos.estaVazia()) {
    const pedidoAtual = filaDePedidos.desenfileirar();

    console.log(
        `COZINHA PREPARA: Pedido #${pedidoAtual.id} [${pedidoAtual.itens.join(", ")}] - Valor: R$ ${pedidoAtual.valorTotal.toFixed(2)}`,
    );
    console.log(`PRONTO: Pedido #${pedidoAtual.id} foi entregue!`)
}
console.log("\n");