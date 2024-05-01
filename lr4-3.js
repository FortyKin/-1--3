function truncate(str, maxlength) {
    if (str.length <= maxlength) {
      return str;
    } else {
      return str.slice(0, maxlength - 3) + '...';
    }
  }
  console.log(truncate('Це дуже довгий рядок', 10)); // "Це дуже..."
  console.log(truncate('Привіт', 6)); // "Привіт"
  console.log(truncate('Дуже довгий рядок, який потрібно обрізати', 20)); // "Дуже довгий рядок..." 