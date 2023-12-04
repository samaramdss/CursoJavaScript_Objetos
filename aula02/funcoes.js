const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "111.222.333-44",
    email: "andre@dominio.com.br",
    telefone: ["4432253091", "44991810521"],
    saldo: 200,
    efetuarPagamento: function (valor) {
        if (valor > this.saldo){
            console.log("Saldo insuficiente");
        }
        else{
            this.saldo -= valor;
            console.log(`Pagamento Realizado. Novo salto: ${this.saldo}`);
        }
    }
  };
  
  cliente.efetuarPagamento(180);

