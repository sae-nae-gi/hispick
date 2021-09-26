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
import star_black from "../../static/card/star-black.png"
import star_blue from "../../static/card/star-blue.png"
import star_pink from "../../static/card/star-pink.png"
import star_purple from "../../static/card/star-purple.png"
import star_sky from "../../static/card/star-sky.png"
import star_yellow from "../../static/card/star-yellow.png"


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
  star_black,
  star_blue,
  star_pink,
  star_purple,
  star_sky,
  star_yellow,
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
  star_black,
  star_blue,
  star_pink,
  star_purple,
  star_sky,
  star_yellow,
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