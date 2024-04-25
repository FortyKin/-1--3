let login = prompt("Введіть логін", '');

if (login === "Адмін") {
  let password = prompt("Введіть пароль", '');

  if (password === "Господар") {
    console.log("Ласкаво просимо!");
  } else if (password === '' || password === null) {
    console.log("Скасовано");
  } else {
    console.log("Неправильний пароль");
  }
} else if (login === '' || login === null) {
  console.log("Скасовано");
} else {
  console.log("Я вас не знаю");
}