function countOccurrences(numbers) {
    const occurrenceMap = new Map();
  
    for (const num of numbers) {
      occurrenceMap.set(num, (occurrenceMap.get(num) || 0) + 1);
    }
  
    return occurrenceMap;
  }
const numbers = [1, 2, 3, 4, 2, 1, 3, 5, 6, 5];
const result = countOccurrences(numbers);
console.log(result);
// Результат: Map { 1 => 2, 2 => 2, 3 => 2, 4 => 1, 5 => 2, 6 => 1 }
