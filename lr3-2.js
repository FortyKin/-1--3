function isPrime(num) {
    if (num < 2) return false; // Числа менші за 2 не є простими
    if (num === 2 || num === 3) return true; // 2 і 3 є простими числами
  
    // Перевірка на парність
    if (num % 2 === 0) return false; 
    // Перевірка на простоту
    const sqrt = Math.sqrt(num);
    for (let i = 3; i <= sqrt; i += 2) {
      if (num % i === 0) return false;
    }
  
    return true;
  }
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
console.log(isPrime(17)); // true
console.log(isPrime(0)); // false
console.log(isPrime(1)); // false