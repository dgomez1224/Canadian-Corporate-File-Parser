const json = require("../wetProIncFrResult.json");
const {
  dynamicKeyValuePairsHelper,
  staticKeyPairsHelper,
  arrayOfObjectsHelper,
} = require("./helperFunctions");

const formatNS = (unformattedData) => {
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
      } else if (property === "DIRECTORS_OFFICERS") {
        const directorsOfficers = unformattedData.DIRECTORS_OFFICERS.values;
        obj[property] = [];
        arrayOfObjectsHelper(obj[property], directorsOfficers);
      } else if (property === "RECOGNIZED_AGENT") {
        const recognizedAgent = unformattedData.RECOGNIZED_AGENT.values;
        obj[property] = {};
        staticKeyPairsHelper(obj[property], recognizedAgent);
      } else if (property === "ACTIVITY") {
        const activity = unformattedData.ACTIVITY.values;
        obj[property] = {};
        dynamicKeyValuePairsHelper(obj[property], activity);
      }
    }
  }
  return obj;
};

// console.log(formatNS(json))

module.exports = formatNS;
