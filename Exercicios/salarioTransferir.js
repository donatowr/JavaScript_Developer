
const { gets, print } = require('../Aulas/funcaoAuxiliar');

const salario = gets();
const beneficio = gets();
let pagamento = 0;

if (salario < 1100) {
    pagamento = salario - (salario / 100 * 5) + beneficio;
} else if (salario > 1100 && salario < 2500) {
    pagamento = salario - (salario / 100 * 10) + beneficio;
} else {
    pagamento = salario - (salario / 100 * 15) + beneficio;
}

print(`O Valor a ser pago ao funcionario é de R$ ${pagamento.toFixed(2)}.`);


