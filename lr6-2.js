function aclean(arr) {
    const map = new Map();
  
    // Допоміжна функція для створення "відсортованого ключа"
    const sortedKey = str => str.toLowerCase().split('').sort().join('');
  
    for (const str of arr) {
      const key = sortedKey(str);
      if (!map.has(key)) {
        map.set(key, str);
      }
    }
  
    return [...map.values()];
  }
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr)); // ["nap", "teachers", "ear"]