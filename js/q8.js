function findLongestWord(words) {
    let longestWordLength = 0;
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWordLength) {
        longestWordLength = words[i].length;
      }
    }
    return longestWordLength;
  }
  
  console.log(findLongestWord(["jag", "testar", "lite", "programmering"])); // Output: 15