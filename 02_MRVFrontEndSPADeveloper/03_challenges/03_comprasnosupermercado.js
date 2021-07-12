// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Set
// https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicatess

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
let totalItems = gets();

for (var i = 0; i < totalItems; i++) {
  let itens = gets();
  let itensOrdenados = itens.split(" ").sort();
  let itensUnicos = [...new Set(itensOrdenados)];
  let resposta = [...itensUnicos].join(" ");
  console.log(resposta);
}
