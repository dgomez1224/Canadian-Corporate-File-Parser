const json = require('../albertaIncFrResult.json')
const ontario = require('../ontarioIncFrResult.json')
const {
  dynamicKeyValuePairsHelper,
  staticKeyPairsHelper,
  arrayOfObjectsHelper,
} = require('./helperFunctions')

const formatAB = (unformattedData) => {
  //... iterate through object and format it to look like the above//create an empty object to store all the information to return
  let obj = {}

  for (const property in unformattedData) {
    //Check to see if property has a values array and the array is empty and if it is set property value to null
    if (
      unformattedData[property].values &&
      unformattedData[property].values.length === 0
    ) {
      obj[property] = []
    } else {
      if (property === 'BASE_INFORMATION') {
        const baseInfo = unformattedData.BASE_INFORMATION.values
        obj[property] = {}
        //This structure of creating an empty object that will store key-value pairs will be repeated for properties whose requested keys are unique. The object property will be added to the overall object and its key will be an object.
        dynamicKeyValuePairsHelper(obj[property], baseInfo)
      } else if (property === 'CORPORATE_INFORMATION') {
        const corporateInfo = unformattedData.CORPORATE_INFORMATION.values

        obj[property] = {}

        dynamicKeyValuePairsHelper(obj[property], corporateInfo)
      } else if (property === 'REGISTERED_OFFICE') {
        const registeredOffice = unformattedData.REGISTERED_OFFICE.values
        obj[property] = {}
        dynamicKeyValuePairsHelper(obj[property], registeredOffice)
      }
      //Need sample data for this case
      else if (property === 'RECORDS_ADDRESS') {
        const recordsAddress = unformattedData.RECORDS_ADDRESS.values
        //This structure of creating an empty array that will store an array of objects will be repeated for properties whose requested keys are repeated thru the input array. The object property will be added to the overall object and its key will be an array of objects.

        obj[property] = [](
          /*Insert corresponding function*/ obj[property],
          recordsAddress,
        )
        //similar to the previous for loops but the object is inside the for loop since the values would be overwritten because of repeated keys. Inside the for loop it creates the object then pushes it to the array before moving on to the next value.
      } else if (property === 'EMAIL') {
        const email = unformattedData.EMAIL.values
        obj[property] = {}

        dynamicKeyValuePairsHelper(obj[property], email)
      } else if (property === 'DIRECTORS') {
        const directors = unformattedData.DIRECTORS.values

        obj[property] = []

        arrayOfObjectsHelper(obj[property], directors)
      } else if (property === 'VOTING_SHAREHOLDERS') {
        const votingShareholders = unformattedData.VOTING_SHAREHOLDERS.values

        obj[property] = []
        arrayOfObjectsHelper(obj[property], votingShareholders)
      } else if (property === 'DETAILS_FROM_CURRENT_ARTICLES') {
        const detailsFromCurrentArticles =
          unformattedData.DETAILS_FROM_CURRENT_ARTICLES.values

        obj[property] = {}
        dynamicKeyValuePairsHelper(obj[property], detailsFromCurrentArticles)
      } else if (property === 'LAST_ANNUAL_RETURN_FILED') {
        const lastAnnualReturn = unformattedData.LAST_ANNUAL_RETURN_FILED.values

        obj[property] = {}
        staticKeyPairsHelper(obj[property], lastAnnualReturn)
      } else if (property === 'FILING_HISTORY') {
        const filingHistory = unformattedData.FILING_HISTORY.values

        obj[property] = {}
        staticKeyPairsHelper(obj[property], filingHistory)
      } else if (property === 'LEGAL_ENTITY_STATUS') {
        const legalEntityStatus = unformattedData.LEGAL_ENTITY_STATUS.values

        obj[property] = {}
        dynamicKeyValuePairsHelper(obj[property], legalEntityStatus)
      } else if (property === 'NAME_HISTORY') {
        const nameHistory = unformattedData.NAME_HISTORY.values

        obj[property] = []
        arrayOfObjectsHelper(obj[property], nameHistory)
      }
      //Need sample data for this case
      else if (property === 'OUTSTANDING_RETURNS') {
        const outstandingReturns = unformattedData.OUTSTANDING_RETURNS.values

        obj[property] = {}
        /*Insert corresponding function*/ obj[property], outstandingReturns
      } else if (property === 'PRIMARY_AGENT_FOR_SERVICE') {
        const primaryAgent = unformattedData.PRIMARY_AGENT_FOR_SERVICE.values

        obj[property] = {}
        staticKeyPairsHelper(obj[property], primaryAgent)
      } else if (property === 'ATTACHMENTS') {
        const attachments = unformattedData.ATTACHMENTS.values

        obj[property] = []
        arrayOfObjectsHelper(obj[property], attachments)
      }
      //Need sample data for this case
      else if (property === 'HOLDING_SHARES') {
        const holdingShares = unformattedData.HOLDING_SHARES.values

        obj[property] = {}
        /*Insert corresponding function*/ obj[property], holdingShares
      }
    }
  }

  console.log(obj)
  //   return obj;
}

formatAB(json)

module.exports = formatAB
