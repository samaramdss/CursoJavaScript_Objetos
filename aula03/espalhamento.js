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

  function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
  }

  ligaParaCliente(...cliente.telefone);

  const encomenda = {
    destinatario: cliente.nome,
    // rua: cliente.enderecos[0].rua,
    // numero: cliente.enderecos[0].numero,
    ...cliente.enderecos[0],
  };

  console.log(encomenda);