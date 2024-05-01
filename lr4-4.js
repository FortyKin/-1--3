function strikeStr(str) {
    const words = str.split(' ');
    let result = '';
    let currentLine = '';
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (currentLine.length + word.length <= 40) {
        currentLine += word + ' ';
      } else {
        result += currentLine.trim() + '\n';
        currentLine = word + ' ';
      }
    }
  
    if (currentLine.length > 0) {
      result += currentLine.trim();
    }
  
    return result;
  }
console.log(strikeStr('Одне два три чотири п\'ять')); // "Одне два три\nчотири п'ять"
console.log(strikeStr('Це дуже довгий рядок, який має бути розбитий на кілька рядків')); // "Це дуже довгий рядок, який має бути\nрозбитий на кілька рядків"
console.log(strikeStr('Короткий рядок')); // "Короткий рядок"