// acessando dinamicamento o valor de um objeto

const Aluno ={
    // chave---valor
    nome: 'Wellington Donato',
    idade: 36,
    endereco: "Rua Sebastião José Pereira",

    descrever: function(){    
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};
const atribulto = 'idade';

//acesso dinamico
Aluno['nome'] = 'Roberta';
//acesso direto
Aluno.idade = 30;

console.log(Aluno['nome']);
console.log(Aluno[atribulto]);