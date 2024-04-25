function random(min, max) {
    return Math.random() * (max - min) + min;
  }
console.log(random(1, 5)); // Випадкове число від 1 до 5 
console.log(random(0, 10)); // Випадкове число від 0 до 10 
console.log(random(-5, 5)); // Випадкове число від -5 до 5 