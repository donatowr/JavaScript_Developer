const {gets, print}= require('../Aulas/funcaoAuxiliar');

const media = gets();

if (media< 5){
    print("Reprovado");
}else if (media >= 5 && media < 7){
    print("Em Recuperação");
}else{
    print("Aprovado")
}

