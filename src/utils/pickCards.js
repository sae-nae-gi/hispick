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
import post_black from "../../static/card/post-black.png";
import post_blue from "../../static/card/post-blue.png";
import post_gold from "../../static/card/post-gold.png";
import post_green from "../../static/card/post-green.png";
import post_pink from "../../static/card/post-pink.png";
import post_purple from "../../static/card/post-purple.png";
import post_sky from "../../static/card/post-sky.png";

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
  post_black,
  post_blue,
  post_gold,
  post_green,
  post_pink,
  post_purple,
  post_sky,
}

export const cardsDictArray = [
  {
    card: tree_black,
    color: "black",
  },
  {
    card: tree_blue,
    color: "blue",
  },
  {
    card: tree_gold,
    color: "gold",
  },
  {
    card: flower_purple ,
    color: "purple",
  },
  {
    card: flower_purple,
    color: "purple",
  },
  {
    card: flower_sky,
    color: "sky",
  },
  {
    card: flower_yellow,
    color: "yellow",
  },
  {
    card: simple_black,
    color: "black",
  },
  {
    card: simple_gold,
    color: "gold",
  },
  {
    card: simple_pink,
    color: "pink",
  },
  {
    card: simple_sky,
    color: "sky",
  },
  {
    card: simple_purple,
    color: "purple",
  },
  {
    card: simple_yellow,
    color: "yellow",
  },
  {
    card: tree_pink,
    color: "pink",
  },
  {
    card: tree_purple,
    color: "purple",
  },
  {
    card: tree_sky,
    color: "sky",
  },
  {
    card: tree_yellow,
    color: "yellow",
  },
  {
    card: flower_black,
    color: "black",
  },
  {
    card: flower_blue,
    color: "blue",
  },
  {
    card: flower_gray,
    color: "gray",
  },
  {
    card: flower_pink,
    color: "pink",
  },
  {
    card: star_black,
    color: "black",
  },
  {
    card: star_blue,
    color: "blue",
  },
  {
    card: star_pink,
    color: "pink",
  },
  {
    card: star_purple,
    color: "purple",
  },
  {
    card: star_sky,
    color: "sky",
  },
  {
    card: star_yellow,
    color: "yellow",
  },
  {
    card: post_black,
    color: "black",
  },
  {
    card: post_blue,
    color: "blue",
  },
  {
    card: post_gold,
    color: "gold",
  },
  {
    card: post_green,
    color: "green",
  },
  {
    card: post_pink,
    color: "pink",
  },
  {
    card: post_purple,
    color: "purple",
  },
  {
    card: post_sky,
    color: "sky",
  }
];
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
  post_black,
  post_blue,
  post_gold,
  post_green,
  post_pink,
  post_purple,
  post_sky,
];

export const getRandomImage = () => {
  return cardsDictArray[Math.trunc(Math.random() * cardsDictArray.length)]
}

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