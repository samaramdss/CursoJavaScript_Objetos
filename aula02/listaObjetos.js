const cliente = {
  nome: "Samara",
  idade: 23,
  cpf: "111.222.333-44",
  email: "samara@dominio.com.br",
  telefone: ["4432253091", "44991810521"],
};
cliente.enderecos = [
  {
    rua: "R. Tiete",
    numero: "435",
    apartamento: true,
    complemento: "Apto 12",
  },
];

cliente.enderecos.push({
  rua: "Pioneiro Luis Minuceli",
  numero: 303,
  apartamento: false,
});

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento==true
);

console.log(listaApenasApartamentos);
