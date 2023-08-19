
const amigos =[];
const filhos = ['Lais', 'Ana', 'Ravi'];
//Retira a ultima posição de um array
filhos.pop();
amigos.push('Doug', 'Paulo', 'Anderson')




console.log(filhos);
console.log(amigos);

filhos.push('Raví');
console.log(filhos);


console.log(amigos);
//retira a primeira primeira posição de um array
amigos.shift();
console.log(amigos);
//adiciona uma posição ao array
amigos.push('Doug');
//Metodo para addcionar ou subistituir uma posição especifica de um array
amigos.splice(1,1);
amigos.splice(1, 0,  'Felipe')
//Adiciona um item a posição 0 de um array
amigos.unshift('Vitão');
console.log(amigos);
//retira a posiçao 0 de um array
amigos.shift();
console.log(amigos);
