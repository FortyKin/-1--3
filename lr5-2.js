function sumInput() {
    let numbers = [];
    let inputValue;
  
    while (true) {
      inputValue = prompt("Введіть число або натисніть Відміна/Ок для завершення");
  
      if (inputValue === null || inputValue === "" || isNaN(inputValue)) {
        break;
      }
  
      numbers.push(+inputValue);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
  
    return sum;
  }
let result = sumInput();
console.log(result); 

// Приклад введення:
// Введіть число або натисніть Відміна/Ок для завершення> 3
// Введіть число або натисніть Відміна/Ок для завершення> 6
// Введіть число або натисніть Відміна/Ок для завершення> 1
// Введіть число або натисніть Відміна/Ок для завершення> Ок
// Результат: 10