const json = require("../auraSaskIncFrResult.json");
const {
  dynamicKeyValuePairsHelper,
  staticKeyPairsHelper,
  arrayOfObjectsHelper,
} = require("./helperFunctions");

const formatSK = (unformattedData) => {
  let obj = {};

  for (const property in unformattedData) {
    if (
      unformattedData[property].values &&
      unformattedData[property].values.length === 0
    ) {
      obj[property] = [];
    } else {
      if (property === "BASE_INFORMATION") {
        
        const baseInfo = unformattedData.BASE_INFORMATION.values;
        obj[property] = {};
        
        dynamicKeyValuePairsHelper(obj[property], baseInfo);
      } else if (property === "REGISTERED_OFFICE_MAILING_ADDRESS") {
        
        const registeredOfficeMailingAddress =
          unformattedData.REGISTERED_OFFICE_MAILING_ADDRESS.values;
        obj[property] = {};
        
        staticKeyPairsHelper(obj[property], registeredOfficeMailingAddress);
      } else if (property === "DIRECTORS_OFFICERS") {
        
        const directorsOfficers = unformattedData.DIRECTORS_OFFICERS.values;
        obj[property] = [];
        
        arrayOfObjectsHelper(obj[property], directorsOfficers);
      } else if (property === "SHAREHOLDERS") {
        
        const shareholders = unformattedData.SHAREHOLDERS.values;
        obj[property] = [];
        
        arrayOfObjectsHelper(obj[property], shareholders);
      } else if (property === "MIN_MAX_SHAREHOLDERS") {
        
        const minMaxShareholders = unformattedData.MIN_MAX_SHAREHOLDERS.values;
        obj[property] = {};
        
        staticKeyPairsHelper(obj[property], minMaxShareholders);
      } else if (property === "SHARE_STRUCTURE") {
        
        const shareStructure = unformattedData.SHARE_STRUCTURE.values;
        obj[property] = [];
        
        arrayOfObjectsHelper(obj[property], shareStructure);
      } else if (property === "EVENT_HISTORY") {
        
        const eventHistory = unformattedData.EVENT_HISTORY.values;
        obj[property] = [];
        
        arrayOfObjectsHelper(obj[property], eventHistory);
      }else if (property === "PREVIOUS_ENTITY_NAMES") {
        
        const previouesEntityNames = unformattedData.PREVIOUS_ENTITY_NAMES.values;
        obj[property] = [];
        
        arrayOfObjectsHelper(obj[property], previouesEntityNames);
      }else if (property === "POWER_OF_ATTORNEY") {
        
        const powerOfAttorney = unformattedData.POWER_OF_ATTORNEY.values;
        obj[property] = [];
        
        arrayOfObjectsHelper(obj[property], powerOfAttorney);
      }
    }

  }
  return obj;
};

console.log(formatSK(json))

module.exports = formatSK;
