const produto = {
  nome: "Headset i2Go",
  preco: 109,
  quantidade: 4,
};

function calcularTotal(produto) {
  return produto.preco * produto.quantidade;
}

const total = calcularTotal(produto);
console.log(`O valor total do produto é: R$ ${total}`);
