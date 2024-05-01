function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('росі') || lowerStr.includes('xxx');
  }
console.log(checkSpam('текст росі текст')); // true
console.log(checkSpam('текст XXX текст')); // true
console.log(checkSpam('текст текст')); // false
console.log(checkSpam('РОСі текст')); // true (нечутливо до регістру)