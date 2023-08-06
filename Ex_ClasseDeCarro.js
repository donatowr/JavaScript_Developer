class Carros{

    marca;
    cor;
    gastoMedioPorKm; 
    
    constructor (marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
        
    }

    gasto(distanciaEmKm, precoCombustivel){
        return (`${distanciaEmKm * this.gastoMedioPorKm * precoCombustivel} Reais`);       
    }

};

const fusca = new Carros ('volks', 'branco', 1/10);
const uno = new Carros ('fiat', 'preto', 1/12);

console.log(fusca.gasto(70,5));
console.log(uno.gasto(70,5));








