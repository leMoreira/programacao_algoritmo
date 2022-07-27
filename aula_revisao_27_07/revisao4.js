// COmer algo

let jantar = 'pizza';
let mulherPaga = true;

if( jantar === 'pizza'){
    console.log("A namorada quer comer pizza La Fornalha 🍕");
    if( mulherPaga === true){
        console.log("Ela quer pagar!");
    }else {
        console.log("Eu vou pagar!")
    }
} else if(jantar === 'carne'){
    console.log("A namorada quer comer no Posto da Serra 🥩🐷");
} else if (jantar === 'japones'){
    console.log("A namorada quer comer no Matsuri 🐟🍣");
} else {
    console.log("A namorada quer torradinhas em casa ");
}