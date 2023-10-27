// Function to get user input for base and height
function getUserInput() {
    var base = parseFloat(prompt("Enter the base of the triangle:"));
    var height = parseFloat(prompt("Enter the height of the triangle:"));
  
    return { base, height };
  }
  
  // Function to calculate the area of a triangle
  function calculateTriangleArea(base, height) {
    if (!isNaN(base) && !isNaN(height) && base > 0 && height > 0) {
      var area = 0.5 * base * height;
      return area;
    } else {
      return "Invalid input. Please enter valid numbers for base and height.";
    }
  }
  
  // Get user input
  var userInput = getUserInput();
  
  // Calculate and display the area
  var area = calculateTriangleArea(userInput.base, userInput.height);
  console.log(area);
  