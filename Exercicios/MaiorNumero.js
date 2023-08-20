const { gets, print } = require('../Aulas/funcaoAuxiliar');

const n = gets();

let maiorNumeroPar = 0;

for (let i = 0; i < n; i++) {
    const numeros = gets();
    if (numeros % 2 === 0) {
        if (numeros > maiorNumeroPar) {
            maiorNumeroPar = numeros;
        }
    
    }

}
console.log(maiorNumeroPar);
