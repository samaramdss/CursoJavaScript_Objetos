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

  for (let chave in cliente){
    let tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== "function"){
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
  }
