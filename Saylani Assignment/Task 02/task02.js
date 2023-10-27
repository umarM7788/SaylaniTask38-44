// Function to check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  
  // Prompt the user for input
  var userInput = prompt("Enter a year:");
  var year = parseInt(userInput);
  
  if (!isNaN(year)) {
    if (isLeapYear(year)) {
      console.log(year + " is a leap year.");
    } else {
      console.log(year + " is not a leap year.");
    }
  } else {
    console.log("Invalid input. Please enter a valid year.");
  }
  