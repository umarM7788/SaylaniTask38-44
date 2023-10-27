function calculateOvertimePay(hoursWorked) {
    const regularHours = 40;
    const overtimeRate = 12; // Rs 12 per hour for overtime
  
    if (hoursWorked <= regularHours) {
      return 0; // No overtime pay if the hours worked are 40 or fewer
    } else {
      const overtimeHours = hoursWorked - regularHours;
      const overtimePay = overtimeHours * overtimeRate;
      return overtimePay;
    }
  }
  
  // Example usage
  const hoursWorked = 45; // Change this to the actual hours worked
  const overtimePay = calculateOvertimePay(hoursWorked);
  console.log(`Overtime Pay: Rs ${overtimePay}`);
  