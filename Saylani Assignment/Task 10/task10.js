function calculateCurrencyNotes() {
    const amountInHundreds = parseFloat(prompt("Enter the amount in hundreds:"));
    
    if (isNaN(amountInHundreds)) {
      console.log("Invalid input. Please enter a valid number.");
      return;
    }
  
    const hundredNote = 100;
    const fiftyNote = 50;
    const tenNote = 10;
  
    const numHundreds = Math.floor(amountInHundreds);
    const numFifties = Math.floor((amountInHundreds * 100) % 100 / fiftyNote);
    const numTens = Math.floor((amountInHundreds * 100) % 100 % fiftyNote / tenNote);
  
    const totalNotes = numHundreds + numFifties + numTens;
  
    console.log(`Amount in hundreds: ${amountInHundreds}`);
    console.log(`Hundreds: ${numHundreds}`);
    console.log(`Fifties: ${numFifties}`);
    console.log(`Tens: ${numTens}`);
    console.log(`Total Notes: ${totalNotes}`);
  }
  
  calculateCurrencyNotes();
  