let contas = new Array('Moto');

contas.push('mesa');
contas.push('telefone');
contas.push('fonte');
contas.push('academia');
contas.push('viagem');
contas.unshift('tiaGi');
//contas.pop()
//contas.splice(5, 1);

console.table(contas);
//console.log(contas.length);

const academia = contas.indexOf('academia');
//console.log(academia);

//console.log(contas.includes('viagem'));

//A MINHA VARIAVEL let e igual a 0, enquanto e for maior < que o tamanho(length) de contas ela vai rodar e colocar mais 1 (i++)

for (let i = 0; i < contas.length; i++) {
  console.log(contas[i]);
}
