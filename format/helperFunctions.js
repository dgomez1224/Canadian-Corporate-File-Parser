exports.dynamicKeyValuePairsHelper = (extractedObject, arrayToExtract) => {
  for (let i = 0; i < arrayToExtract.length; i++) {
    const properties = arrayToExtract[i].properties;

    //For this property we want to assign key-value pairs based on the "KEY" key and "VALUE" key
    if (properties.VALUE) {
      extractedObject[properties.KEY.value] = properties.VALUE.value || "";
    }  else {
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

  //Refactored to make dryer. This code assumes the values array will only have one object
    /*
    const properties = arrayToExtract[0].properties;

    for (const key in properties) {
      extractedObject[key] = properties[key].value || "";
    }
    */

  // Refactored to make dryer. For the following code remove 'extracedObject' param
  // This method runs a reduce method on the input "values" array setting an empty object as the initial value
      /*
      const extractedValues = arrayToExtract.reduce((acc, curr) => {
      Object.keys(curr.properties).forEach(key => {
        acc[key] = curr.properties[key].value;
      });
      return acc
      }, {})
      console.log(extractedValues)
      return extractedValues 
     */


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

  //Refactored to try to reduce time complexity. 
  // for (let i = 0; i < arrayToExtract.length; i++) {
  //   const properties = arrayToExtract[i].properties;
  //   const helperObject = Object.keys(properties).reduce((acc, key) => {
  //     acc[key] = properties[key].value || "";
  //     return acc;
  //   }, {});
  //   extractedObject.push(helperObject);
  // }

};
