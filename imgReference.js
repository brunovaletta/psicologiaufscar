const ant = 'Images/ant.jpg';
const apple = 'Images/apple.jpg';
const bell = 'Images/bell.jpg';
const bird = 'Images/bird.jpg';
const jelly = 'Images/jelly.jpg';
const cat = 'Images/cat.jpg';
const cheese = 'Images/cheese.jpg';
const scarf = 'Images/scarf.jpg';
const cow = 'Images/cow.jpg';
const coin = 'Images/coin.jpg';
const doll = 'Images/doll.jpg';
const fish = 'Images/fish.jpg';
const glove = 'Images/glove.jpg';
const grape = 'Images/grape.jpg';
const lettuce = 'Images/lettuce.jpg';
const horse = 'Images/horse.jpg';
const lizard = 'Images/lizard.jpg';
const juice = 'Images/juice.jpg';
const kite = 'Images/kite.jpg';
const lobster = 'Images/lobster.jpg';
const lollipop = 'Images/lollipop.jpg';
const milk = 'Images/milk.jpg';
const olive = 'Images/olive.jpg';
const ostrich = 'Images/ostrich.jpg';
const peanut = 'Images/peanut.jpg';
const box = 'Images/box.jpg';
const cinnamon = 'Images/cinnamon.jpg';
const sock = 'Images/sock.jpg';
const swing = 'Images/swing.jpg';
const tie = 'Images/tie.jpg';
const turtle = 'Images/turtle.jpg';
const pig = 'Images/pig.jpg';
const plunger = 'Images/plunger.jpg';
const puzzle = 'Images/puzzle.jpg';
const scooter = 'Images/scooter.jpg';
const seesaw = 'Images/seesaw.jpg';
const sheep = 'Images/sheep.jpg';
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
