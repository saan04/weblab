function isVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char.toLowerCase());
  }
  
  console.log(isVowel('a'));