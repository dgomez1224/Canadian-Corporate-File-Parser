const json = require("../bclifeLabsFrResult.json");
const {
  dynamicKeyValuePairsHelper,
  staticKeyPairsHelper,
  arrayOfObjectsHelper,
} = require("./helperFunctions");

const formatBC = (unformattedData) => {
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
      // these two properties have the same structure of just one key and value so it will check if the property is one of these first and assign respective values
      if (property === "STATUS" || property === "STATUS_DETAILS") {
        if (!unformattedData[property].value) {
          obj[property] = "";
        } else {
          obj[property] = unformattedData[property].value;
        }
      } else if (property === "BASE_INFORMATION") {
        const baseInfo = unformattedData.BASE_INFORMATION.values;
        obj[property] = {};
        //This structure of creating an empty object that will store key-value pairs will be repeated for properties whose requested keys are unique. The object property will be added to the overall object and its key will be an object.
        dynamicKeyValuePairsHelper(obj[property], baseInfo);
      } else if (property === "REGISTERED_OFFICE_INFORMATION") {
        const registeredOfficeInfo =
          unformattedData.REGISTERED_OFFICE_INFORMATION.values;

        obj[property] = {};
        staticKeyPairsHelper(obj[property], registeredOfficeInfo);

        

      } else if (property === "RECORDS_OFFICE_INFORMATION") {
        const recordsOfficeInfo =
          unformattedData.RECORDS_OFFICE_INFORMATION.values;
        
        obj[property] = {};
        staticKeyPairsHelper(obj[property], recordsOfficeInfo);


      } else if (property === "DIRECTOR_INFORMATION") {
        const directorInfo = unformattedData.DIRECTOR_INFORMATION.values;
        //This structure of creating an empty array that will store an array of objects will be repeated for properties whose requested keys are repeated thru the input array. The object property will be added to the overall object and its key will be an array of objects.
        
        obj[property] = []
        arrayOfObjectsHelper(obj[property], directorInfo)
        //similar to the previous for loops but the object is inside the for loop since the values would be overwritten because of repeated keys. Inside the for loop it creates the object then pushes it to the array before moving on to the next value.
        
      } else if (property === "OFFICER_INFORMATION") {
        const officerInfo = unformattedData.OFFICER_INFORMATION.values;
        obj[property] = [];

        arrayOfObjectsHelper(obj[property], officerInfo)
      } else if (property === "COMPANY_NAME_INFORMATION") {
        const companyNameInfo = unformattedData.COMPANY_NAME_INFORMATION.values;
         
        obj[property] = [];
        
        arrayOfObjectsHelper(obj[property], companyNameInfo)

      } else if (property === "AMALGAMATING_CORPORATIONS_INFORMATION") {
        const amalgamatingCorpInfo =
          unformattedData.AMALGAMATING_CORPORATIONS_INFORMATION.values;
      
        obj[property] = [];
        arrayOfObjectsHelper(obj[property], amalgamatingCorpInfo)

      } else if (property === "DISSOLATION_RESTORATION_INFORMATION") {
        const dissolationRestorationInfo =
          unformattedData.DISSOLATION_RESTORATION_INFORMATION.values;
        
        obj[property] = [];
        arrayOfObjectsHelper(obj[property], dissolationRestorationInfo)
      } else if (property === "CONTINUED_OUT_INFORMATION") {
        const continuedOutInfo =
          unformattedData.CONTINUED_OUT_INFORMATION.values;

        obj[property] = {};
        staticKeyPairsHelper(obj[property], continuedOutInfo)

      }
    }
    //   console.log(`${property}: ${unformattedData[property]}`);
  }

  console.log(obj);
  return obj;
};

formatBC(json);

module.exports = formatBC;
