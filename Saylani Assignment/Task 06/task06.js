function removeVowels(sentence) {
    // Regular expression to match vowels (both uppercase and lowercase)
    const vowelRegex = /[aeiouAEIOU]/g;
  
    // Replace all vowels with an empty string
    const result = sentence.replace(vowelRegex, '');
  
    return result;
  }
  
  // Example usage
  const sentence = "This is a sample sentence with vowels.";
  const sentenceWithoutVowels = removeVowels(sentence);
  console.log(sentenceWithoutVowels);
  