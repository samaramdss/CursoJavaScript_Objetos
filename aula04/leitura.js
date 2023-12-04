const dados = require("./cliente.json");

console.log(dados);

console.log(typeof dados);
///mostrar um capo específico
console.log(dados.telefone);

//transforma em string
const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);

console.log(clienteEmString.nome); //undefine

const objetoCliente = JSON.parse(clienteEmString);

console.log(objetoCliente);
