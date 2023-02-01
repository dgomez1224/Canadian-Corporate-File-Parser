exports.dynamicKeyValuePairsHelper = (extractedObject, arrayToExtract) => {
  for (let i = 0; i < arrayToExtract.length; i++) {
    const properties = arrayToExtract[i].properties;

    //For this property we want to assign key-value pairs based on the "KEY" key and "VALUE" key
    if (properties.VALUE) {
      extractedObject[properties.KEY.value] = properties.VALUE.value || "";
    } else if (properties.COLUMN2) {
      extractedObject[properties.KEY.value] = properties.COLUMN2.value || "";
    } else {
      extractedObject[properties.KEY.value] = "";
    }
  }
};

exports.staticKeyPairsHelper = (extractedObject, arrayToExtract) => {
  for (let i = 0; i < arrayToExtract.length; i++) {
    const properties = arrayToExtract[i].properties;

    for (const key in properties) {
      extractedObject[key] = properties[key].value || "";
    }
  }
};

exports.arrayOfObjectsHelper = (extractedObject, arrayToExtract) => {
  for (let i = 0; i < arrayToExtract.length; i++) {
    const helperObject = {};

    const properties = arrayToExtract[i].properties;
    for (const key in properties) {
      helperObject[key] = properties[key].value || "";
    }
    extractedObject.push(helperObject);
  }
};
