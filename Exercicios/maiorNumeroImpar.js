
const { gets, print } = require('../Aulas/funcaoAuxiliar')

const n = gets();

let menorNumeroImpar = null;
let maiorNumeroPar = null;

for (let i = 0; i < n; i++) {
    const numeros = gets();
    if (numeros % 2 === 0) {
        if(maiorNumeroPar === null || numeros > maiorNumeroPar)
            maiorNumeroPar = numeros;     
        
    } else {
        if (menorNumeroImpar === null || numeros < menorNumeroImpar) {
            menorNumeroImpar = numeros;

        }
    }
}
print(menorNumeroImpar);
print(maiorNumeroPar);