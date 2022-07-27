function relogio(){
    const data = new Date();
    console.log(data.toLocaleTimeString());
}

const meuIntervalo = setInterval(relogio, 1000);

function pararFuncao(){
    clearInterval(meuIntervalo);
}