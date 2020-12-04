let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let botao = document.getElementById('botao');
let tentativa = 1;
let contIndex = 0;
let escolheu = false;

const blocos = 4;

let images = [''];
for (let i = 0; i < params.stimuli.length; i++) {
  images.push(params.stimuli[i]);
}
console.log(images);

// Array de índices
let index = params.index;

hideImages = () => {
  img1.style.visibility = 'hidden';
  img2.style.visibility = 'hidden';
  img3.style.visibility = 'hidden';
};

showImages = () => {
  img1.style.visibility = 'visible';
  img2.style.visibility = 'visible';
  img3.style.visibility = 'visible';
};

removeBorders = () => {
  img1.style.borderStyle = 'none';
  img2.style.borderStyle = 'none';
  img3.style.borderStyle = 'none';
};

//Início
botao.onclick = () => {
  if (tentativa != 1) {
    hideImages();
  }
  img1.src = images[index[contIndex]];
  contIndex += 1;
  img2.src = images[index[contIndex]];
  contIndex += 1;
  img3.src = images[index[contIndex]];
  contIndex += 1;
  showImages();
  botao.style.visibility = 'hidden';
  removeBorders();
  tentativa += 1;
  console.log(tentativa);
  if (tentativa != 1) {
    escolheu = false;
  }

  if (tentativa >= blocos*6+2) {
    hideImages();
    botao.style.visibility = 'hidden';
    document.body.style.backgroundColor = 'black';
  }
};

img1.onclick = () => {
  if (!escolheu) {
    img1.style.borderStyle = 'solid';
    escolheu = true;
    botao.style.visibility = 'visible';
    botao.innerHTML = 'Próximo';
  }
};

img2.onclick = () => {
  if (!escolheu) {
    img2.style.borderStyle = 'solid';
    escolheu = true;
    botao.style.visibility = 'visible';
    botao.innerHTML = 'Próximo';
  }
};

img3.onclick = () => {
  if (!escolheu) {
    img3.style.borderStyle = 'solid';
    escolheu = true;
    botao.style.visibility = 'visible';
    botao.innerHTML = 'Próximo';
  }
};
