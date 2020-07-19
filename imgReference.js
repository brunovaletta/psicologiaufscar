const cake = 'Images/cake.jpg';
const candle = 'Images/candle.jpg';
const cherry = 'Images/cherry.jpg';
const dog = 'Images/dog.jpg';
const donkey = 'Images/donkey.jpg';
const egg = 'Images/egg.jpg';
const garlic = 'Images/garlic.jpg';
const onion = 'Images/onion.jpg';
const pool = 'Images/pool.jpg';
const shield = 'Images/shield.jpg';
const slide = 'Images/slide.jpg';
const snake = 'Images/snake.jpg';
const pumpkin = 'Images/pumpkin.jpg';
const zucchini = 'Images/zucchini.jpg';
const eggplant = 'Images/eggplant.jpg';
const beetle = 'Images/beetle.jpg';
const stove = 'Images/stove.jpg';
const skunk = 'Images/skunk.jpg';
const dolphin = 'Images/dolphin.jpg';
const urchin = 'Images/urchin.jpg';
const pepper = 'Images/pepper.jpg';
const octopus = 'Images/octopus.jpg';
const bag = 'Images/bag.jpg';

var imgs = [];
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    imgs[i] = new Image();
    imgs[i].src = preload.arguments[i];
  }
}

preload(
  cake,
  candle,
  cherry,
  dog,
  donkey,
  egg,
  garlic,
  onion,
  pool,
  shield,
  slide,
  snake,
  pumpkin,
  zucchini,
  eggplant,
  beetle,
  stove,
  skunk,
  dolphin,
  urchin,
  pepper,
  octopus,
  bag
);
