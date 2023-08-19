//Objetos em javaScripit são uma coleção dinamica de chave e valor

const Aluno ={
    nome: 'Wellington Donato',
    idade: 36,
    endereco: "Rua Sebastião José Pereira",

    descrever: function(){    
        console.log(this.nome + this.endereco);
    }

};


/*Aluno.peso = 98;
delete Aluno.nome;
console.log(Aluno);
*/
Aluno.descrever()