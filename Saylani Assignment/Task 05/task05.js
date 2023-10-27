function customIndexOf(inputString, searchChar) {
    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] === searchChar) {
        return i;
      }
    }
    return -1; // Return -1 if the character is not found
  }
  
  // Example usage
  const inputString = "Hello, World!";
  const searchChar = "o";
  const index = customIndexOf(inputString, searchChar);
  
  if (index !== -1) {
    console.log(`'${searchChar}' found at index ${index}`);
  } else {
    console.log(`'${searchChar}' not found in the string.`);
  }
  