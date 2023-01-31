/*

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

const formatBC = (unformattedData) => {
  //... iterate through object and format it to look like the above
}

module.exports = formatBC
