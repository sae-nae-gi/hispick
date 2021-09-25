import simple_black from "../../static/card/simple-black.png";
import simple_blue from "../../static/card/simple-blue.png"
import simple_gold from "../../static/card/simple-gold.png"
import simple_pink from "../../static/card/simple-pink.png"
import simple_purple from "../../static/card/simple-purple.png"
import simple_sky from "../../static/card/simple-sky.png"
import simple_yellow from "../../static/card/simple-yellow.png"
import tree_black from "../../static/card/tree-black.png"
import tree_blue from "../../static/card/tree-blue.png"
import tree_gold from "../../static/card/tree-gold.png"
import tree_pink from "../../static/card/tree-pink.png"
import tree_purple from "../../static/card/tree-purple.png"
import tree_sky from "../../static/card/tree-sky.png"
import tree_yellow from "../../static/card/tree-yellow.png"
import flower_black from "../../static/card/flower-black.png"
import flower_blue from "../../static/card/flower-blue.png"
import flower_gray from "../../static/card/flower-gray.png"
import flower_pink from "../../static/card/flower-pink.png"
import flower_purple from "../../static/card/flower-purple.png"
import flower_sky from "../../static/card/flower-sky.png"
import flower_yellow from "../../static/card/flower-yellow.png"

export {
  simple_black,
  simple_blue,
  simple_gold,
  simple_pink,
  simple_sky,
  simple_purple,
  simple_yellow,
  tree_black,
  tree_blue,
  tree_gold,
  tree_pink,
  tree_purple,
  tree_sky,
  tree_yellow,
  flower_black,
  flower_blue,
  flower_gray,
  flower_pink,
  flower_purple,
  flower_sky,
  flower_yellow,
}

export const cards = [
  tree_black,
  tree_blue,
  tree_gold,
  flower_purple,
  flower_sky,
  flower_yellow,
  simple_black,
  simple_blue,
  simple_gold,
  simple_pink,
  simple_sky,
  simple_purple,
  simple_yellow,
  tree_pink,
  tree_purple,
  tree_sky,
  tree_yellow,
  flower_black,
  flower_blue,
  flower_gray,
  flower_pink,
]

export const getRandomCard = (number) => {
  if (number <= 0) {
    throw Error("number should be larger than zero");
  }

  const cardCounts = Math.trunc(number);


  let remains = cardCounts;
  const pickedCards = [];
  const dict = {};

  while (true) {
    if (!remains) {
      break;
    }
    const index = Math.trunc(Math.random() * cards.length);
    if (!dict[index]) {
      dict[index] = true;
      pickedCards.push(dict[index]);
      --remains;
    }
  }

  return cards;
}