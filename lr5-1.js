// 1. Створіть масив styles з елементами "Jazz" та "Blues"
let styles = ["Jazz", "Blues"];

// 2. Додайте "Rock-n-Roll" в кінець масиву
styles.push("Rock-n-Roll");
console.log(styles); // ["Jazz", "Blues", "Rock-n-Roll"]

// 3. Замініть значення в середині масиву на "Classics"
const middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Classics";
console.log(styles); // ["Jazz", "Classics", "Rock-n-Roll"]

// 4. Видаліть перший елемент масиву та покажіть його
const removedElement = styles.shift();
console.log(removedElement); // "Jazz"
console.log(styles); // ["Classics", "Rock-n-Roll"]

// 5. Вставте Rap та Reggae на початок масиву
styles.unshift("Rap", "Reggae");
console.log(styles); // ["Rap", "Reggae", "Classics", "Rock-n-Roll"]