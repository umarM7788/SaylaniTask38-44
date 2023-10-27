// Function to convert kilometers to meters
function kilometersToMeters(kilometers) {
    return kilometers * 1000;
  }
  
  // Function to convert kilometers to feet
  function kilometersToFeet(kilometers) {
    const feetInAMeter = 3.28084;
    return kilometersToMeters(kilometers) * feetInAMeter;
  }
  
  // Function to convert kilometers to inches
  function kilometersToInches(kilometers) {
    const inchesInAfoot = 12;
    return kilometersToFeet(kilometers) * inchesInAfoot;
  }
  
  // Function to convert kilometers to centimeters
  function kilometersToCentimeters(kilometers) {
    return kilometers * 100000;
  }
  
  // Example usage
  const distanceInKilometers = 100;
  const distanceInMeters = kilometersToMeters(distanceInKilometers);
  const distanceInFeet = kilometersToFeet(distanceInKilometers);
  const distanceInInches = kilometersToInches(distanceInKilometers);
  const distanceInCentimeters = kilometersToCentimeters(distanceInKilometers);
  
  console.log(`Distance in kilometers: ${distanceInKilometers} km`);
  console.log(`Distance in meters: ${distanceInMeters} meters`);
  console.log(`Distance in feet: ${distanceInFeet} feet`);
  console.log(`Distance in inches: ${distanceInInches} inches`);
  console.log(`Distance in centimeters: ${distanceInCentimeters} cm`);
  