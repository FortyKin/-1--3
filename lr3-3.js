function sumOfNumbers(n) {
    let sum = 0;
    const isNegative = n < 0;
  
    
    n = Math.abs(n);
  
    for (let i = 1; i <= n; i++) {
      sum += isNegative ? -i : i;
    }
  
    return sum;
  }
  console.log(sumOfNumbers(5)); // 15 
  console.log(sumOfNumbers(-5)); // -15 
  console.log(sumOfNumbers(0)); // 0  