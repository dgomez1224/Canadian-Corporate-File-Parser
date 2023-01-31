const json = require("../lifeLabsFrResult.json");

const formatBC = (unformattedData) => {
  //... iterate through object and format it to look like the above//create an empty object to store all the information to return
  let obj = {};

  //create variables to simplify routes for nested objects
  let baseInfo = unformattedData.BASE_INFORMATION.values;
  let registeredOfficeInfo =
    unformattedData.REGISTERED_OFFICE_INFORMATION.values;
  let recordsOfficeInfo = unformattedData.RECORDS_OFFICE_INFORMATION.values;
  let directorInfo = unformattedData.DIRECTOR_INFORMATION.values;
  let officerInfo = unformattedData.OFFICER_INFORMATION.values;
  let companyNameInfo = unformattedData.COMPANY_NAME_INFORMATION.values;
  let amalgamatingCorpInfo =
    unformattedData.AMALGAMATING_CORPORATIONS_INFORMATION.values;
  let dissolationRestorationInfo =
    unformattedData.DISSOLATION_RESTORATION_INFORMATION.values;
  let continuedOutInfo = unformattedData.CONTINUED_OUT_INFORMATION.values;

  for (const property in unformattedData) {
    //Check to see if property has a values array and the array is empty and if it is set property value to null
    if (
      unformattedData[property].values &&
      unformattedData[property].values.length === 0
    ) {
      obj[property] = null;
    } else {
      // these two properties have the same structure of just one key and value so it will check if the property is one of these first and assign respective values
      if (property === "STATUS" || property === "STATUS_DETAILS") {
        if (unformattedData[property].value === undefined) {
          obj[property] = null;
        } else {
          obj[property] = unformattedData[property].value;
        }
      } else if (property === "BASE_INFORMATION") {
        //This structure of creating an empty object that will store key-value pairs will be repeated for properties whose requested keys are unique. The object property will be added to the overall object and its key will be an object.
        const baseInfoObject = {};
        obj[property] = baseInfoObject;
        for (let i = 0; i < baseInfo.length; i++) {
          const properties = baseInfo[i].properties;
          //For this property we want to assign key-value pairs based on the "KEY" key and "VALUE" key
          baseInfoObject[properties.KEY.value] = properties.VALUE.value;
        }
      } else if (property === "REGISTERED_OFFICE_INFORMATION") {
        const registeredOfficeObject = {};
        obj[property] = registeredOfficeObject;
        for (let i = 0; i < registeredOfficeInfo.length; i++) {
          const properties = registeredOfficeInfo[i].properties;

          for (const key in properties) {
            registeredOfficeObject[key] = properties[key].value;
          }
        }
      } else if (property === "RECORDS_OFFICE_INFORMATION") {
        const recordsOfficeObject = {};
        obj[property] = recordsOfficeObject;
        for (let i = 0; i < recordsOfficeInfo.length; i++) {
          const properties = recordsOfficeInfo[i].properties;

          for (const key in properties) {
            recordsOfficeObject[key] = properties[key].value;
          }
        }
      } else if (property === "DIRECTOR_INFORMATION") {
        //This structure of creating an empty array that will store an array of objects will be repeated for properties whose requested keys are repeated thru the input array. The object property will be added to the overall object and its key will be an array of objects.
        const directorArr = [];

        obj[property] = directorArr;

        //similar to the previous for loops but the object is inside the for loop since the values would be overwritten because of repeated keys. Inside the for loop it creates the object then pushes it to the array before moving on to the next value.
        for (let i = 0; i < directorInfo.length; i++) {
          const directorObject = {};

          const properties = directorInfo[i].properties;
          for (const key in properties) {
            directorObject[key] = properties[key].value;
          }
          directorArr.push(directorObject);
        }
      } else if (property === "OFFICER_INFORMATION") {
        const officerArr = [];
        obj[property] = officerArr;

        for (let i = 0; i < officerInfo.length; i++) {
          const officerObject = {};

          const properties = officerInfo[i].properties;
          for (const key in properties) {
            officerObject[key] = properties[key].value;
          }
          officerArr.push(officerObject);
        }
      } else if (property === "COMPANY_NAME_INFORMATION") {
        const cniArr = [];

        obj[property] = cniArr;
        for (let i = 0; i < companyNameInfo.length; i++) {
          const cniObject = {};

          const properties = companyNameInfo[i].properties;
          for (const key in properties) {
            cniObject[key] = properties[key].value;
          }
          cniArr.push(cniObject);
        }
      } else if (property === "AMALGAMATING_CORPORATIONS_INFORMATION") {
        const amalgamatingCorpInfoObject = {};
        obj[property] = amalgamatingCorpInfoObject;
        for (let i = 0; i < amalgamatingCorpInfo.length; i++) {
          const properties = amalgamatingCorpInfo[i].properties;
          for (const key in properties) {
            amalgamatingCorpInfoObject[key] = properties[key].value;
          }
        }
      } else if (property === "DISSOLATION_RESTORATION_INFORMATION") {
        const dissolationRestorationInfoObject = {};
        obj[property] = dissolationRestorationInfoObject;
        for (let i = 0; i < dissolationRestorationInfo.length; i++) {
          const properties = dissolationRestorationInfo[i].properties;
          for (const key in properties) {
            dissolationRestorationInfoObject[key] = properties[key].value;
          }
        }
      } else if (property === "CONTINUED_OUT_INFORMATION") {
        const continuedOutInfoObject = {};
        obj[property] = continuedOutInfoObject;
        for (let i = 0; i < continuedOutInfo.length; i++) {
          const properties = continuedOutInfo[i].properties;

          for (const key in properties) {
            continuedOutInfoObject[key] = properties[key].value;
          }
        }
      }
    }
    //   console.log(`${property}: ${unformattedData[property]}`);
  }

  console.log(obj);
  return obj;
};

formatBC(json);

module.exports = formatBC;

/*

{
    "MAILING_ADDRESS":{
        "value": "ACTIVE"
    }
    "DELIVERY_ADDRESS":{
        "value": "ACTIVE"
    }
    "STATUS_STATUS":{
        "value": "ACTIVE"
    }
}


FR data
{
    "STATUS": "ACTIVE",
    "BASE_INFORMATION": [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object]
    ]
}

what we want

{
    "STATUS": "ACTIVE",
    "BASE_INFORMATION": {
        "Date and Time of Search:": "October 05, 2022 11:10 AM Pacific Time",
        ... rest of key values inside of base information
    },
    "REGISTERED_OFFICE_INFORMATION": {
        "MAILING_ADDRESS": "1234 Main Street",
        "DELIVERY_ADDRESS": "1234 Main Street",
    },
    "RECORDS_OFFICE_INFORMATION": {
        "MAILING_ADDRESS": "1234 Main Street",
        "DELIVERY_ADDRESS": "1234 Main Street",
    },
    "DIRECTOR_INFORMATION": [
        {
            "LAST_FIRST_MIDDLE_NAME": "Smith, John",
            "MAILING_ADDRESS": "1234 Main Street",
            "DELIVERY_ADDRESS": "1234 Main Street",
        },
        {
            "LAST_FIRST_MIDDLE_NAME": "Portnoy, Dave",
            "MAILING_ADDRESS": "1234 Main Street",
            "DELIVERY_ADDRESS": "1234 Main Street",
        }
    ],
    "OFFICER_INFORMATION": [
        {
            "LAST_FIRST_MIDDLE_NAME": "Smith, John",
            "OFFICES_HELD": "(Other Office(s))"
            "MAILING_ADDRESS": "1234 Main Street",
            "DELIVERY_ADDRESS": "1234 Main Street",
        },
        {
            "LAST_FIRST_MIDDLE_NAME": "Portnoy, Dave",
            "MAILING_ADDRESS": "1234 Main Street",
            "DELIVERY_ADDRESS": "1234 Main Street",
        }
    ],
    "COMPANY_NAME_INFORMATION": [
        {
            "PREVIOUS_COMPANY_NAME": "SOMETHING",
            "DATE_OF_COMPANY_NAME_CHANGE": "July 21, 2021",
        },
    ]
    "AMALGAMATING_CORPORATIONS_INFORMATION": [
        {
            "PREVIOUS_COMPANY_NAME": "SOMETHING",
            "DATE_OF_COMPANY_NAME_CHANGE": "July 21, 2021",
        },
        {
            "PREVIOUS_COMPANY_NAME": "SOMETHING",
            "DATE_OF_COMPANY_NAME_CHANGE": "July 21, 2021",
        },
    ],
    "DISSOLATION_RESTORATION_INFORMATION": [
        {
            "FILING_EVENT": "something",
            "DATE_OF_FILING": "July 21, 2021",  
        }
    ],
    "CONTINUED_OUT_INFORMATION": {
        "Jurisdiction": "Ontario"
    },
    "STATUS_DETAILS": "This company is in the process of being dissolved"
}

*/
