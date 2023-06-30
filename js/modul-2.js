// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }
//   return 'The order is accepted, our manager will contact you';

// Change code above this line
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));
// =======================================================================
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// console.log(fruits);
// =======================================================================
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];
// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);
// ========================================================================
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// Write your code under this line
// fruits[1] = 'peach';
// fruits[3] = 'banana';
// console.log(fruits);
// ========================================================================
// const fruits = ['apple', 'peach', 'pear', 'banana'];

// // Change code below this line
// const fruitsArrayLength = fruits.length;

// console.log('length', fruitsArrayLength);
// ========================================================================
// const fruits = ['apple', 'peach', 'pear', 'banana'];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElement);
// ========================================================================
// function getExtremeElements(array) {
//   array.splice(1, array.length - 2);
//   return array;
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));
// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));
// ========================================================================
// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimiter);

//   // Change code above this line
//   return words;
// }
// console.log(splitMessage('Mango hurries to the train', ' '));
// console.log(splitMessage('Mango', ''));
// console.log(splitMessage('best_for_week', '_'));
// =========================================================================
// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   return message.split(' ').length * pricePerWord;
//   // Change code above this line
// }
// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));
// console.log(calculateEngravingPrice('JavaScript is in my blood', 20));
// console.log(calculateEngravingPrice('Web-development is creative work', 40));
// console.log(calculateEngravingPrice('Web-development is creative work', 20));
// ==========================================================================
// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line
//   string = array.join(delimiter);
//   // Change code above this line
//   return string;
// }
// console.log(
//   makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' ')
// );
// console.log(makeStringFromArray(['M', 'a', 'n', 'g', 'o'], ''));
// console.log(makeStringFromArray(['top', 'picks', 'for', 'you'], '_'));
// ===========================================================================
// function slugify(title) {
//   // Change code below this line
//   return title.toLowerCase().split(' ').join('-');
//   // Change code above this line
// }
// console.log(slugify('Arrays for begginers'));
// console.log(slugify('English for developer'));
// console.log(slugify('Ten secrets of JavaScript'));
// console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));
// ============================================================================
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(2, 5);
// console.log(fruits);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);
// ============================================================================
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line
// console.log(allClients);
// ============================================================================
// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   let makeArray = firstArray.concat(secondArray);
//   makeArray =
//     makeArray.length < maxLength ? makeArray : makeArray.slice(0, maxLength);
//   return makeArray;
//   // Change code above this line
// }
// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4));
// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4));
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0));
// =============================================================================
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i);
// }
// =============================================================================
// function calculateTotal(number) {
//   // Change code below this line
//   let sum = 0;
//   for (i = 1; i <= number; i += 1) {
//     sum = sum + i;
//   }
//   return sum;
//   // Change code above this line
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
// console.log(calculateTotal());
// ===============================================================================
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }
// ===============================================================================
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (const argument of order) {
//     total += argument;
//   }
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// ==============================================================================
// function findLongestWord(string) {
//   // Розділяємо рядок на масив слів
//   const wordsArray = string.split(' ');

//   // Ініціалізуємо змінну для збереження найдовшого слова
//   let longestWord = '';

//   // Проходимо по масиву слів та порівнюємо їх довжину
//   for (let i = 0; i < wordsArray.length; i++) {
//     const currentWord = wordsArray[i];
//     if (currentWord.length > longestWord.length) {
//       longestWord = currentWord;
//     }
//   }

//   return longestWord;
// }

// // Приклади виклику функції
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // поверне "jumped"
// console.log(findLongestWord('Google do a roll')); // поверне "Google"
// console.log(findLongestWord('May the force be with you')); // поверне "force"
// ===============================================================================
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));
// ================================================================================
// function filterArray(numbers, value) {
//   // Change code below this line
//   const result = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//       result.push(numbers[i]);
//     }
//   }
//   return result;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// =================================================================================
// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];

//   return fruits.includes(fruit); // Change this line
// }
// console.log(checkFruit('plum'));
// console.log(checkFruit('mandarin'));
// console.log(checkFruit('pear'));
// console.log(checkFruit('Pear'));
// console.log(checkFruit('apple'));
// =================================================================================
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const commonElements = [];

//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       commonElements.push(array1[i]);
//     }
//   }

//   return commonElements;
//   // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// ================================================================================
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const item of order) {
//     total += item;
//   }

//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));
// ================================================================================
// function getEvenNumbers(start, end) {
//   // Change code below this line

//   const evenNumbers = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }

//   return evenNumbers;
//   // Change code above this line
// }

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));
// ================================================================================
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);
// ================================================================================
// function includes(array, value) {
//   // Change code below this line

//   for (let i = 0; i <= array.length; i++) {
//     if (array[i] === value) {
//       return true;
//     }
//   }

//   return false;

//   // Change code above this line
// }
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(
//   includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter')
// );
// console.log(
//   includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus')
// );
// console.log(includes(['apple', 'plum', 'pear', 'orange'], 'plum'));
// console.log(includes(['apple', 'plum', 'pear', 'orange'], 'kiwi'));
