const bilingualLexicon = {
    "merry": "god",
    "christmas": "jul",
    "and": "och",
    "happy": "gott",
  "new": "nytt",
    "year": "år"
  };
  function translate(englishWords) {
    let swedishWords = [];
    for (let i = 0; i < englishWords.length; i++) {
      if (bilingualLexicon[englishWords[i]]) {
        swedishWords.push(bilingualLexicon[englishWords[i]]);
      } else {
        swedishWords.push(englishWords[i]);
      }
    }
    return swedishWords;
  }
  
  const englishWords = ["merry", "christmas", "and", "happy", "new", "year"];
  const swedishWords = translate(englishWords);
  console.log(swedishWords); 