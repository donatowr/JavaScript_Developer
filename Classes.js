class Pessoa{
    nome;
    idade;

    descrever() {
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const Raví = new Pessoa();
Raví.nome = 'Raví Donato Santos';
Raví.idade = (`3 meses`);

const Roberta = new Pessoa();
Roberta.nome = 'Roberta Santos';
Roberta.idade = 30;

/*
    console.log(Raví);
    console.log(Roberta);
*/
Roberta.descrever();
Raví.descrever();