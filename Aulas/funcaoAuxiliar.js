

const entrada = [5000, 300];
let i = 0;
function gets(){
    const valor = entrada[i]; 
    i++;
    return valor;
    }

    function print(texto){
        console.log(texto);
    }

    module.exports = {gets, print};

