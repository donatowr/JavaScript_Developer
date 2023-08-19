

class Pessoa{
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade; //isntancia criada
    }

    descrever() {
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
}

function compararPessoas(filha1, filha2){
    if(filha1.idade > filha2.idade){
    console.log(`${filha1.nome} É mais velha que ${filha2.nome}`);
     } else if(filha2.idade > filha1.idade){
        console.log(`${filha2.nome} É mais velha que ${filha1.nome}`);
    } else{
        console.log(`${filha1.nome} e ${filha2.nome} tem a mesma idade`)
    }

}

const lais = new Pessoa('Laís', 11);
const ana = new Pessoa('Ana', 9);

compararPessoas(lais, ana)

