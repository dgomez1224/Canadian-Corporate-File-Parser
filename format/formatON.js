const json = require("../ontarioIncFrResult.json");
const alberta = require('../albertaIncFrResult.json')
const {
  dynamicKeyValuePairsHelper,
  staticKeyPairsHelper,
  arrayOfObjectsHelper,
} = require("./helperFunctions");

const formatON = (unformattedData) => {
  //... iterate through object and format it to look like the above//create an empty object to store all the information to return
  let obj = {};

  for (const property in unformattedData) {
    //Check to see if property has a values array and the array is empty and if it is set property value to null
    if (
      unformattedData[property].values &&
      unformattedData[property].values.length === 0
    ) {
      obj[property] = [];
    } else {
      if (property === "BASE_INFORMATION") {
        const baseInfo = unformattedData.BASE_INFORMATION.values;
        obj[property] = {};
        //This structure of creating an empty object that will store key-value pairs will be repeated for properties whose requested keys are unique. The object property will be added to the overall object and its key will be an object.
        dynamicKeyValuePairsHelper(obj[property], baseInfo);
      } else if (property === "ACTIVE_DIRECTORS") {
        const directorInfo = unformattedData.ACTIVE_DIRECTORS.values;
        //This structure of creating an empty array that will store an array of objects will be repeated for properties whose requested keys are repeated thru the input array. The object property will be added to the overall object and its key will be an array of objects.

        obj[property] = [];
        arrayOfObjectsHelper(obj[property], directorInfo);
        //similar to the previous for loops but the object is inside the for loop since the values would be overwritten because of repeated keys. Inside the for loop it creates the object then pushes it to the array before moving on to the next value.
      } else if (property === "ACTIVE_OFFICERS") {
        const officerInfo = unformattedData.ACTIVE_OFFICERS.values;
        obj[property] = [];

        arrayOfObjectsHelper(obj[property], officerInfo);
      } else if (property === "ACTIVE_DIRECTORS_NUMBER") {
        const activeDirectorsNumber =
          unformattedData.ACTIVE_DIRECTORS_NUMBER.values;

          obj[property] = {}
          staticKeyPairsHelper(obj[property], activeDirectorsNumber)
        
        //Refactored output for reduce method  
        // obj[property] = staticKeyPairsHelper(activeDirectorsNumber);
        
      } else if (property === "CORPORATE_NAME_HISTORY") {
        const corporateNameHistory = unformattedData.CORPORATE_NAME_HISTORY.values;

        obj[property] = [];

        arrayOfObjectsHelper(obj[property], corporateNameHistory);
      }
      //Need sample data for this case
      else if (property === "AMALGAMATING_CORPORATIONS") {
        const amalgamatingCorpInfo =
          unformattedData.AMALGAMATING_CORPORATIONS.values;

        obj[property] = [];
        /*Insert corresponding function*/ (obj[property], amalgamatingCorpInfo);
      }
      //Need sample data for this case
      else if (property === "ACTIVE_BUSINESS_NAMES") {
        const activeBusinessNames =
          unformattedData.ACTIVE_BUSINESS_NAMES.values;

        obj[property] = {};
        /*Insert corresponding function*/ (obj[property], activeBusinessNames);
        
      }
    }
    //   console.log(`${property}: ${unformattedData[property]}`);
  }

  console.log(obj);
//   return obj;
};

formatON(json);

module.exports = formatON;
