//Objetos em javaScripit são uma coleção dinamica de chave e valor

const Aluno ={
    nome: 'Wellington Donato',
    idade: 36,
    endereco: "Rua Sebastião José Pereira",

    descrever: function(){    
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};


/*Aluno.peso = 98;
delete Aluno.nome;
console.log(Aluno);
*/
Aluno.descrever()