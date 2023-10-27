// Function to calculate the average of three subjects
function calculateAverage(subject1, subject2, subject3) {
    return (subject1 + subject2 + subject3) / 3;
  }
  
  // Function to calculate the percentage of the marks
  function calculatePercentage(subject1, subject2, subject3) {
    const totalMarks = subject1 + subject2 + subject3;
    const maximumMarks = 300; // Assuming each subject has a maximum of 100 marks
    return (totalMarks / maximumMarks) * 100;
  }
  
  // Main function
  function calculateAndDisplayResults(subject1, subject2, subject3) {
    const average = calculateAverage(subject1, subject2, subject3);
    const percentage = calculatePercentage(subject1, subject2, subject3);
  
    console.log("Subject 1 Marks: " + subject1);
    console.log("Subject 2 Marks: " + subject2);
    console.log("Subject 3 Marks: " + subject3);
    console.log("Average Marks: " + average.toFixed(2));
    console.log("Percentage: " + percentage.toFixed(2) + "%");
  }
  
  // Example usage
  const subject1Marks = 85;
  const subject2Marks = 90;
  const subject3Marks = 78;
  
  calculateAndDisplayResults(subject1Marks, subject2Marks, subject3Marks);
  