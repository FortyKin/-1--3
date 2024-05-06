let user = {
    name: "Іван",
    age: 30
};

// Додавання властивості isAdmin з значенням false
user.isAdmin = false;

// Деструктуроване присвоєння
const { name, age, isAdmin } = user;

alert(name); //Іван
alert(age); //30
alert(isAdmin); //false
