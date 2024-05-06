function areAllUnique(arr) {
    const uniqueSet = new Set(arr);
    return uniqueSet.size === arr.length;
  }
const uniqueArray = [1, 2, 3, 4, 5];
const hasDuplicates = areAllUnique(uniqueArray);
console.log(hasDuplicates); // Результат: true
  
const arrayWithDuplicates = [1, 2, 3, 2, 4, 5];
const hasDuplicates2 = areAllUnique(arrayWithDuplicates);
console.log(hasDuplicates2); // Результат: false