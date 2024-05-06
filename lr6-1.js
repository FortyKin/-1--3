function unique(arr) {
    return [...new Set(arr)];
  }
let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-0"];
console.log(unique(values)); // ["Hare", "Krishna", ":-0"]