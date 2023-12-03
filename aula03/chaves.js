const cliente = {
  nome: "Samara",
  idade: 23,
  cpf: "111.222.333-44",
  email: "samara@dominio.com.br",
  telefone: ["4432253091", "44991810521"],
};
// cliente.enderecos = [
//   {
//     rua: "R. Tiete",
//     numero: "435",
//     apartamento: true,
//     complemento: "Apto 12",
//   },
// ];

//retorna um array com todas as chaves já iniciadas
const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")){
    console.error("Erro. É necessário um endereço cadastrado.");
}
