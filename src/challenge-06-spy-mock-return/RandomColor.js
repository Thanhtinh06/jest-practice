import { getRandomInt } from './helper';

export default class RandomColor {
  constructor() {
    this.generatedColors = [];
  }

  newColor() {
    const colors = RandomColor.colors;
    const index = getRandomInt(0, colors.length - 1);
    let color = colors[index];
    if (this.generatedColors.includes(color)) {
      return this.newColor();
    }
  
    this.generatedColors.push(color);
    if (this.generatedColors.length  === colors.length - 1) {
      this.generatedColors.shift();
    }
  
    return color;
  }
}

RandomColor.colors = ['red', 'green', 'blue'];

// const generatedFruits = [];
// export const fruits = ['apple', 'babana', 'orange'];

// export default function newFruit() {
//   const index = getRandomInt(0, fruits.length - 1);
//   let fruit = fruits[index];
//   if (generatedFruits.includes(fruit)) {
//     return newFruit();
//   }

//   generatedFruits.push(fruit);
//   if (generatedFruits.length  === fruits.length - 1) {
//     generatedFruits.shift();
//   }

//   return fruit;
// }
