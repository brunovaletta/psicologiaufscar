const cake = "Images/cake.jpg";
const candle = "Images/candle.jpg";
const cherry = "Images/cherry.jpg";
const dog = "Images/dog.jpg";
const donkey = "Images/donkey.jpg";
const egg = "Images/egg.jpg";
const garlic = "Images/garlic.jpg";
const onion = "Images/onion.jpg";
const pool = "Images/pool.jpg";
const shield = "Images/shield.jpg";
const slide = "Images/slide.jpg";
const snake = "Images/snake.jpg";
const pumpkin = "Images/pumpkin.jpg";
const zucchini = "Images/zucchini.jpg";
const eggplant = "Images/eggplant.jpg";
const beetle = "Images/beetle.jpg";
const stove = "Images/stove.jpg";
const skunk = "Images/skunk.jpg";
const dolphin = "Images/dolphin.jpg";
const urchin = "Images/urchin.jpg";
const pepper = "Images/pepper.jpg";
const octopus = "Images/octopus.jpg";
const bag = "Images/bag.jpg";


var imgs = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        imgs[i] = new Image();
        imgs[i].src = preload.arguments[i];
    }
}

preload(cake,candle,cherry,dog,donkey,egg,garlic,onion,pool,shield,slide,snake,pumpkin,zucchini,eggplant,beetle,stove,skunk,dolphin,urchin,pepper,octopus,bag);

let alta1 = urchin;
let alta2 = skunk;
let alta3 = octopus;
let alta4 = pepper;
let alta5 = pool;
let alta6 = dolphin;
let baixa1 = zucchini;
let baixa2 = beetle;
let baixa3 = pumpkin;
let baixa4 = stove;
let baixa5 = bag;
let baixa6 = eggplant;

let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let botao = document.getElementById('botao');
let tentativa = 1;
let contIndex = 0;
let escolheu = false;

// Array de imagens
let images = ["",alta1,alta2,alta3,alta4,alta5,alta6,baixa1,baixa2,baixa3,baixa4,baixa5,baixa6];

// Array de índices
let index = [1,3,2,6,2,4,3,1,5,2,6,4,5,3,1,4,6,2,10,7,12,8,11,9,12,10,9,7,10,8,11,12,9,7,12,10,1,3,5,6,2,3,1,4,5,2,3,1,4,2,3,4,3,1,9,11,10,10,7,11,11,7,12,12,8,11,9,10,7,10,12,9];

hideImages = () => {
    img1.style.visibility = 'hidden';
    img2.style.visibility = 'hidden';
    img3.style.visibility = 'hidden';
}

showImages = () => {
    img1.style.visibility = 'visible';
    img2.style.visibility = 'visible';
    img3.style.visibility = 'visible';
}

removeBorders = () => {
    img1.style.borderStyle = 'none';
    img2.style.borderStyle = 'none';
    img3.style.borderStyle = 'none';
}

//Início
botao.onclick = () => {
    
    if (tentativa!=1) {
        hideImages();
    }
    img1.src = images[index[contIndex]];
    contIndex +=1;
    img2.src = images[index[contIndex]];
    contIndex +=1;
    img3.src = images[index[contIndex]];
    contIndex +=1;
    showImages();
    botao.style.visibility = 'hidden';
    removeBorders();
    tentativa += 1;
    console.log(tentativa);
    if (tentativa!=1) {
        escolheu = false;
    }

    if (tentativa>=26) {
        hideImages();
            botao.style.visibility = 'hidden';
            document.body.style.backgroundColor = 'black';
    }
    
}

img1.onclick = () => {
    if (!escolheu) {
        img1.style.borderStyle = 'solid';
        escolheu = true;
        botao.style.visibility = 'visible';
        botao.innerHTML = 'Próximo';
    }
}

img2.onclick = () => {
    if (!escolheu) {
        img2.style.borderStyle = 'solid';
        escolheu = true;
        botao.style.visibility = 'visible';
        botao.innerHTML = 'Próximo';           
    }
}

img3.onclick = () => {
    if (!escolheu) {
        img3.style.borderStyle = 'solid';
        escolheu = true;
        botao.style.visibility = 'visible';
        botao.innerHTML = 'Próximo';
    }
}