// Um exercício interessante seria criar um arquivo .json com informações de um produto, como nome, preço e descrição. 
// Em seguida, utilize a função JSON.stringify() para transformar o objeto em uma string no formato JSON. 
// Por fim, utilize a função JSON.parse() para converter a string de volta em um objeto JavaScript e imprima as informações do produto no console.
// Isso irá ajudar a praticar a leitura e escrita de arquivos JSON.


const leitura = require("./produto.json");
console.log(leitura);

const objetoEmString = JSON.stringify(leitura);
console.log(objetoEmString);

const stringEmObjeto = JSON.parse(objetoEmString);
console.log(stringEmObjeto);