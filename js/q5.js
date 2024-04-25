function sum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  }
  
  function multiply(numbers) {
    let total = 1;
    for (let i = 0; i < numbers.length; i++) {
      total *= numbers[i];
    }
    return total;
  }
  
  console.log(sum([1, 2, 3, 4])); // Output: 10
  console.log(multiply([1, 2, 3, 4])); // Output: 24