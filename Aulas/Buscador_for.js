const numeros = [15,18,36,45,96,58,100];
for (i=0; i<numeros.length; i++){
numeros.push(i)
    const num = numeros[i] % 2 == 0;
if(num === true){
console.log(numeros[i]);
} else{
    console.log(`${numeros[i]} impar`)
}

}


/* const num ;
if(= numeros[i] % 2 == 0)
console.log(`${numeros[i]} é numero par`)
}
*/