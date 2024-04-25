let salaries = {
    Jarik: 1000,
    Anna: 1600,
    Miko: 1300
  };
  
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }
  
  console.log(sum); // 3900