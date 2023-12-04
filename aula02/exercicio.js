const produto = {
  nome: "Camiseta Branca Adidas",
  preco: 200,
  estoque: 10,
  categoria: ["roupas", "masculino", "camisetas", "Adidas"],

  verificarEstoque: function (quantidade) {
    if (quantidade > this.estoque) {
      console.log("Produto indisponível em estoque");
    } else
      console.log(
        `Há ${this.estoque} unidades do produto ${this.nome} em estoque`
      );
  },

  filtrarPorCategoria: function(categoria){
    return this.categoria.filter(item => item == categoria);
  }
};

produto.verificarEstoque(9);
const produtosFiltrados = produto.filtrarPorCategoria("masculino");
console.log(produtosFiltrados);


