function getMaxSubSum(arr) {
    let maxSum = 0;
    let currentSum = 0;
  
    for (let item of arr) {
      currentSum = Math.max(0, currentSum + item);
      maxSum = Math.max(maxSum, currentSum);
    }
  
    return maxSum;
  }
  console.log(getMaxSubSum([-1, 2, 3, -9])); // 5 
  console.log(getMaxSubSum([2, -1, 2, 3, -9])); // 6 
  console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11 
  console.log(getMaxSubSum([-2, -1, 1, 2])); // 3 
  console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100 
  console.log(getMaxSubSum([1, 2, 3])); // 6 
  console.log(getMaxSubSum([-1, -2, -3])); // 0   