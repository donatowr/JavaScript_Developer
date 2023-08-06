class Pessoa{
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
}

const lais = new Pessoa('Laís', 11);
const ana = new Pessoa('Ana', 9);

/*
    console.log(Raví);
    console.log(Roberta);
*/
console.log(lais);
//lais.descrever();
ana.descrever();