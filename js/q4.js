function translate(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      let letter = text[i];
      if ('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'.indexOf(letter) !== -1) {
        result += letter + 'o' + letter;
      } else {
        result += letter;
      }
    }
    return result;
  }
  
  console.log(translate("this is fun"));