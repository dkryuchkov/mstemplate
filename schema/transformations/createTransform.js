const _ = require("lodash");
const path = require('path');
const scriptName = path.basename(__filename);
const { ...utils
} = require('../../utils');
const { ...config
} = require('../../config')

const headerTransform = require('./headerTransform');

const DataTransform = require("node-json-transform").DataTransform;
const map = {
    list: "input",
    item: {
        "SyncCustomerPartyListEBM": {
            "EBMHeader": "headers",
            "DataArea": {
                "SyncCustomerPartyList": {
                    "Identification": {
                        "ContextID": "customerType"
                    },
                    "PartyLocation": "address",
                    "PartyContact": "contactPoints",
                    "TypeCode": "customerType",
                    "Custom": "headers"
                }

            }
        }
    },
    operate: [{
            run: (headers) => headerTransform(headers, {
                Target: {
                    ServiceName: "PersonService_Upsert"
                },
                VerbCode: "Upsert"
            }),
            on: "SyncCustomerPartyListEBM.EBMHeader"
        },
        {
            run: (adress) => DataTransform({
                list: adress
            }, AddressMap).transform(adress),
            on: "SyncCustomerPartyListEBM.DataArea.SyncCustomerPartyList.PartyLocation"
        },
        {
            run: (contact) => utils.mergeContacts(DataTransform({
                list: contact
            }, ContactMap).transform(contact)),
            on: "SyncCustomerPartyListEBM.DataArea.SyncCustomerPartyList.PartyContact"
        },
        {
            run: (type) => config.config.allMaps.ContextID[type],
            on: "SyncCustomerPartyListEBM.DataArea.SyncCustomerPartyList.TypeCode"
        },
        {
            run: (type) => config.config.allMaps.ContextID[type],
            on: "SyncCustomerPartyListEBM.DataArea.SyncCustomerPartyList.Identification.ContextID"
        },
        {
            run: (headers) => DataTransform({
                list: [headers]
            }, SyncCustomerPartyListCustomMap).transform()[0],
            on: "SyncCustomerPartyListEBM.DataArea.SyncCustomerPartyList.Custom"
        }
    ],
    each: (item, index, collection, context) => {
        if (context.customerType == 'Individual') {
            item.SyncCustomerPartyListEBM.DataArea.SyncCustomerPartyList.Person =
                DataTransform({
                    list: [context]
                }, PersonMap).transform()[0]
        }
        return item;
    }
};

const PersonMap = {
    list: "list",
    item: {
        "GenderCode": "name.gender",
        "MaritalStatusCode": "indAdditionalInfo.maritalstatus",
        "BirthDateTime": "indAdditionalInfo.dob",
        "PersonName": {
            "FirstName": "name.firstName",
            "MiddleName": "indAdditionalInfo.middleName",
            "FamilyName": "name.lastName",
            "Title": "name.title"
        },
        "Custom": {
            "BirthDate": "indAdditionalInfo.dob",
            "Industry": "indAdditionalInfo.industry",
            "OccupationCode": "indAdditionalInfo.occupationCode",
            "FATCAIdNumber": "fatcaidnumber",
            "FATCAUSCitizen": "fatcauscitizen"
        }
    },
    operate: [{
            run: (gender) => config.config.allMaps.GenderCode[gender.toUpperCase()],
            on: "GenderCode"
        },
        {
            run: (gender) => config.config.allMaps.MaritalStatusCode[gender.toUpperCase()],
            on: "MaritalStatusCode"
        },
        {
            run: (title) => config.config.allMaps.Title[title.toUpperCase()],
            on: "PersonName.Title"
        },
        {
            run: (fatcauscitizen) => fatcauscitizen || config.config.defaults.FATCAUSCitizen,
            on: "Custom.FATCAUSCitizen"
        }
    ]
};

const PhoneMap = {
    list: "list",
    item: {
        "PhoneCommunication": {
            "LocalNumber": "communication.phoneNumber",
            "UseCode": "usetype",
            "TypeCode": "typecode",
            "AreaCode": "communication.areaCode",
            "CountryCode": "communication.countryCode"
        },
        "Custom": "custom"
    },
    operate: [{
            run: (custom) => DataTransform({
                list: [custom]
            }, CustomCommMap).transform([custom]),
            on: "Custom"
        },
        {
            run: (type) => config.config.allMaps.UseCode[utils.toEnumFromGraphQlEnumTransform(type)],
            on: "PhoneCommunication.UseCode"
        },
        {
            run: (type) => config.config.allMaps.TypeCode[utils.toEnumFromGraphQlEnumTransform(type)],
            on: "PhoneCommunication.TypeCode"
        }
    ]
};

const EmailMap = {
    list: "list",
    item: {
        "EmailCommunication": {
            "URI": "communication.emailAddress",
            "UseCode": "usetype",
            "TypeCode": "typecode"
        },
        "Custom": "custom"
    },
    operate: [{
            run: (custom) => DataTransform({
                list: [custom]
            }, CustomCommMap).transform([custom]),
            on: "Custom"
        },
        {
            run: (type) => config.config.allMaps.UseCode[utils.toEnumFromGraphQlEnumTransform(type)],
            on: "EmailCommunication.UseCode"
        },
        {
            run: (type) => config.config.allMaps.TypeCode[utils.toEnumFromGraphQlEnumTransform(type)],
            on: "EmailCommunication.TypeCode"
        }
    ]
};

const contactToList = (contact, matcher) => {
    const contacts = [];
    let i = 0;
    Object.entries(contact).forEach(([key, value]) => {
        if (key.match(matcher)) contacts.push({
            value: value,
            type: key,
            custom: contact.custom,
            preffered: i++ ? false : true
        })
    });
    return contacts;
}

const ContactMap = {
    list: "list",
    item: {
        "Contact": {}
    },
    each: (item, index, collection, context) => {
        // make changes
        const type = `${context[index].type === 'EMAIL' ? "ContactEmailCommunication" : "ContactPhoneCommunication"}`;
        if (!item.Contact[type]) item.Contact[type] = [];
        item.Contact[type] = item.Contact[type].concat(DataTransform({
            list: [context[index]]
        }, context[index].type === 'EMAIL' ? EmailMap : PhoneMap).transform());
        return item;
    }
}

const AddressMap = {
    list: "list",
    item: {
        "LocationReference": {
            "Address": {
                "LineOne": "line1",
                "LineTwo": "line2",
                "LineThree": "line3",
                "LineFour": "line4",
                "LineFive": "line5",
                "LineSix": "line6",
                "LineSeven": "line7",
                "LineEight": "line8",
                "LineNine": "line9",
                "DeliveryPointCode": "deliveryPointTypeCode",
                "CityName": "cityName",
                "StateName": "stateName",
                "CountryCode": "countryCode",
                "PostalCode": "postalCode",
                "LongPostalCode": "longPostalCode",
                "Custom": "custom"
            }
        }
    },
    operate: [{
            run: (custom) => DataTransform({
                list: [custom]
            }, CustomAddressMap).transform()[0],
            on: "LocationReference.Address.Custom"
        },
        {
            run: (line5) => config.config.allMaps.LineFive[utils.toEnumFromGraphQlEnumTransform(line5)],
            on: "LocationReference.Address.LineFive"
        },
        {
            run: (line8) => config.config.allMaps.LineEight[utils.toEnumFromGraphQlEnumTransform(line8)],
            on: "LocationReference.Address.LineEight"
        },
        {
            run: (line9) => config.config.allMaps.LineNine[utils.toEnumFromGraphQlEnumTransform(line9)],
            on: "LocationReference.Address.LineNine"
        },
        {
            run: (city) => city,
            on: "LocationReference.Address.CityName"
        }
    ],
    each: (item, index, collection, context) => {
        // make changes
        item.LocationReference.Address.CityName = item.LocationReference.Address.CityName || context[index].suburb;
        return item;
    }
};

const SyncCustomerPartyListCustomMap = {
    list: "list",
    item: {
        "CreatedSystem": "application",
        "CreatedUser": "user",
        "LastUpdatedSys": "application",
        "LastUpdatedUser": "user",
        "NonResidentIndicator": "indcustomerdetail.taxresident",
        "Organization": "brand",
        "PartyState": "customer.customerState",
        "PartyRoles": {
            "PartyRole": {
                "OrganizationName": "application",
                "RoleCode": "customer.customerState"
            }
        },
        "Brand": "brand",
        "ListOfContactPosition": {
            "ContactPosition": {
                "Division": "application",
                "Position": "application"
            }
        }
    },
    operate: [{
            run: (taxresident) => taxresident === 'N' ? 'Y' : 'N',
            on: "NonResidentIndicator"
        },
        {
            run: (application) => config.config.allMaps.OrganizationName[application].Code,
            on: "PartyRoles.PartyRole.OrganizationName"
        },
        {
            run: (customerState) => config.config.allMaps.PartyState[customerState],
            on: "PartyState"
        },
        {
            run: (customerState) => config.config.allMaps.PartyState[customerState],
            on: "PartyRoles.PartyRole.RoleCode"
        },
        {
            run: (application) => config.config.allMaps.OrganizationName[application].ContactPosition.Division,
            on: "ListOfContactPosition.ContactPosition.Division"
        },
        {
            run: (application) => config.config.allMaps.OrganizationName[application].ContactPosition.Position,
            on: "ListOfContactPosition.ContactPosition.Position"
        }
    ]
};

const CustomCommMap = {
    list: "list",
    item: { 
        "CreatedSystem": "headers.application",
        "CreatedUser": "headers.user",
        "ContactPoint": "contact.typecode",
        "LastUpdatedSystem": "headers.application",
        "LastUpdatedUser": "headers.user",
        "OrganizationName": "headers.application",
        "EffectiveStartDate": "contact.startDate",
        "Purpose": ""
    },
    operate: [{
            run: (type) => type ? utils.toEnumFromGraphQlEnumTransform(config.config.allMaps.RelationshipType[type.toUpperCase()]) : null,
            on: "RelationshipType"
        },
        {
            run: () => "COMM",
            on: "Purpose"
        },
        {
            run: (type) => config.config.allMaps.TypeCode[utils.toEnumFromGraphQlEnumTransform(type)],
            on: "ContactPoint"
        },
        {
            run: (application) => config.config.allMaps.OrganizationName[application].Code,
            on: "OrganizationName"
        },
        {
            run: (date) => date ? utils.toOCHDate(date) : null,
            on: "EffectiveStartDate"
        }
    ],
    each: (item, index, collection, context) => {
        // make changes
        item.ConcatenatedNumber = utils.concatenatedPhoneNumber(context[index]);
        return item;
    }
};

const CustomAddressMap = {
    list: "list",
    item: {
        "CreatedSystem": "headers.application",
        "CreatedUser": "headers.user",
        "LastUpdatedUser": "headers.user",
        "OrganizationName": "headers.application",
        "RelationshipType": "address.relationshipType",
        "StartDate": "address.startDate",
        "EndDate": "address.endDate",
        "Occupancy": "address.occupancy",
        "Type": "address.type",
        "UpdatedSystem": "headers.application",
        "IsOBPAddress": ""
    },
    operate: [{
            run: (type) => type ? utils.toEnumFromGraphQlEnumTransform(config.config.allMaps.RelationshipType[type]) : null,
            on: "RelationshipType"
        },
        {
            run: (date) => date ? utils.toOCHDate(date) : null,
            on: "EndDate"
        },
        {
            run: (date) => date ? utils.toOCHDate(date) : null,
            on: "StartDate"
        },
        {
            run: (type) => type ? utils.toEnumFromGraphQlEnumTransform(config.config.allMaps.RelationshipType[type]) : null,
            on: "Type"
        },
        {
            run: (type) => type ? utils.toEnumFromGraphQlEnumTransform(type) : null,
            on: "Occupancy"
        },
        {
            run: (application) => config.config.allMaps.OrganizationName[application].Code,
            on: "OrganizationName"
        },
        {
            run: () => "Y",
            on: "IsOBPAddress"
        }
    ]
};

const inputData = (data) => {
    data.address.forEach(address => address.custom = {
        headers: data.headers,
        defaults: config.config.defaults,
        address: JSON.parse(JSON.stringify(address))
    });
    data.contactPoints.forEach(contact => {
        contact.custom = {
            headers: data.headers,
            defaults: config.config.defaults,
            contact: JSON.parse(JSON.stringify(contact))
        };
        contact.contact = JSON.parse(JSON.stringify(contact));
    });
    data.headers.customer = JSON.parse(JSON.stringify(data));
    data = {
        input: [data]
    };
    return data;
};

module.exports = (json) => utils.removeNull(DataTransform(inputData(json), map).transform(json)[0]);
/*
let json = require('../__mocks__/create').input_body;
json.headers = require('../__mocks__/headers').headers;
console.log(JSON.stringify(require(`./${scriptName}`)(json)));
*/