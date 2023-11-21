const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "111.222.333-44",
    email: "andre@dominio.com.br",
};

// console.log(cliente);
console.log(`O nome do cliente é ${cliente["nome"]}`);

console.log(`Os tês primeiros dígitos do CPF dele são ${cliente.cpf.substring(0,3)}`);

const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach( (chave)=> {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
})