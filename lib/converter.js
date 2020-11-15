const colors = require('colors'); 
 
 // Units available to convert
const UNITS = {
    cm: {
        m: 0.01  
    },
    m: {
        cm: 100
    }
};

// Converter function
  let converterFunc = (conversionQuery) => {

      // Seperates query into individual strings in an array
      let allwords = conversionQuery.match(/("[^"]+"|[^"\s]+)/g)
      // Removes all characters from query other than digits and '.' to allow for float
      let numToConvert = conversionQuery.replace(/[^\d.-]/g, '');
      // selects unit to convert from
      let unitToConvert = allwords[1]
      // selects unit to convert to
      let unitResult = allwords[3]

      // Check to see if units are available
      if (!UNITS[unitToConvert] || !UNITS[unitToConvert][unitResult]) {
        return("Error! This unit is not currerntly supported. Please try again.");
      } else {
        // calculates result using variables and conversion rate stored in UNITS
      let numResult = numToConvert * UNITS[unitToConvert][unitResult]
      // Outputs result in desired format
      return `${numResult} ${unitResult}`
      }
}

module.exports.converterFunc = converterFunc