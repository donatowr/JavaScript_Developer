
class Pessoa{
    nome;
    peso;
    altura;

constructor(nome, peso, altura){
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
    
}

IMc(peso, altura){
    return (this.peso / (this.altura * this.altura) );
}

classeImc(){

    const imc = this.IMc();

    if (imc < 19){
        return 'Abaixo do peso';
    } else if(imc >= 19 && imc < 25 ){
        return 'peso normal';
    } else if(imc >= 25 && imc < 30 ){
        return 'Acima do peso';
    } else if(imc >= 30 && imc <40){
        return 'Obeso';
    } else {        
        return 'Obesidade Grave';
    }
}

}

// const Jose = new Pessoa('José', 70, 1.75).classeImc();
const Roberta = new Pessoa('Roberta', 78, 1.76);
//const Wellington = new Pessoa('Wellington', 96, 1.82);

// console.log(Jose.IMc(), Jose.classeImc());
console.log(Roberta.IMc(), Roberta.classeImc());
// console.log(Wellington.IMc(), Wellington.classeImc());