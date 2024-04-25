function filterLongWords(words, i) {
    return words.filter(word => word.length > i);
  }
  
  console.log(filterLongWords(["jag", "testar", "lite", "programmering"], 3)); 