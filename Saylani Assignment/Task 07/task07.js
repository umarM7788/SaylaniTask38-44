function countSuccessiveVowels(text) {
    let count = 0;
    text = text.toLowerCase(); // Convert the text to lowercase for case insensitivity
  
    for (let i = 0; i < text.length - 1; i++) {
      const currentChar = text[i];
      const nextChar = text[i + 1];
  
      switch (currentChar + nextChar) {
        case 'ae':
        case 'ai':
        case 'ao':
        case 'au':
        case 'ea':
        case 'ei':
        case 'eo':
        case 'eu':
        case 'ia':
        case 'ie':
        case 'io':
        case 'iu':
        case 'oa':
        case 'oe':
        case 'oi':
        case 'ou':
        case 'ua':
        case 'ue':
        case 'ui':
        case 'uo':
          count++;
          break;
        default:
          // Do nothing for other combinations
          break;
      }
    }
  
    return count;
  }
  
  // Example usage
  const text = "This is an example of counting successive vowels in a text line.";
  const numSuccessiveVowels = countSuccessiveVowels(text);
  console.log(`Number of successive vowels: ${numSuccessiveVowels}`);
  