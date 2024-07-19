// Function to find matching driver names case insensitive
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// Function to find driver names that start with the provided letters
function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
}

// Function to find driver objects with matching name property
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}

// Sample data for testing
const drivers = [
    { name: "Bobby", hometown: "Pittsburgh" },
    { name: "Sammy", hometown: "New York" },
    { name: "Sally", hometown: "Cleveland" },
    { name: "Annette", hometown: "Los Angeles" },
    { name: "Bobby", hometown: "Tampa Bay" }
];

// Test the functions
console.log(findMatching(["Bobby", "Sammy", "Sally", "Annette", "Bobby"], "Bobby")); // ["Bobby", "Bobby"]
console.log(fuzzyMatch(["Bobby", "Sammy", "Sally", "Annette", "Bobby"], "Sa")); // ["Sammy", "Sally"]
console.log(matchName(drivers, "Bobby")); // [{ name: "Bobby", hometown: "Pittsburgh" }, { name: "Bobby", hometown: "Tampa Bay" }]

