function charFreq(str) {
    const freq = {};
    for (const char of str) {
      if (freq[char]) {
        freq[char]++;
      } else {
        freq[char] = 1;
      }
    }
    return freq;
  }
  
  console.log(charFreq("abbabcbdbabdbdbabababcbcbab"));