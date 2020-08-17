const _ = require("underscore");
const path = require('path');
const scriptName = path.basename(__filename);
const { ...utils
} = require('../../utils');
const { ...config
} = require('../../config');

const DataTransform = require("node-json-transform").DataTransform;
const map = {
    list: "input",
    item: {
        result: "all"
    },
    operate: [{
        run: (list, context) => {
            return DataTransform({
                list: list
            }, itemMap).transform(list)
        },
        on: "result"
    }]
};

const itemMap = {
    list: "list",
    item: {
        "id": "Id",
        "createDateTime": "",
        "type": "Type",
        "title": "Title",
        "firstName": "FirstName",
        "middleName": "MiddleName",
        "middleNameTwo": "MiddleNameTwo",
        "lastName": "LastName",
        "cgid": "CGID",
        "birthDate": "BirthDate",
        "homePhone": "HomePhone",
        "workPhone": "WorkPhone",
        "mobilePhone": "MobilePhone",
        "emailAddress": "EmailAddress",
        "identityVerificationStatus": "IdentityVerificationStatus",
        "status": "Status",
        "goldenId": "GoldenID",
        "matchScore": "MatchScore",
        "addresses": "ListOfCandidateAddress.CandidateAddress",
        "contactReference": "ListOfContactReference.ContactReference"
    },
    operate: [{
            run: (value) => !value ? null : _.invert(config.config.allMaps.Title)[value],
            on: "title"
        },
        {
            run: (value) => !value ? null : _.invert(config.config.allMaps.ContextID)[value],
            on: "type"
        },
        {
            run: (value) => !value ? null : _.invert(config.config.allMaps.IdentityVerificationStatus)[value],
            on: "identityVerificationStatus"
        },
        {
            run: (list, context) => {
                return DataTransform({
                    list: list[0]
                }, ListOfCandidateAddress).transform()
            },
            on: "addresses"
        },
        {
            run: (list, context) => {
                return DataTransform({
                    list: list
                }, listOfContactReferenceMap).transform(list)
            },
            on: "contactReference"
        }
    ]
};

const listOfContactReferenceMap = {
    list: "list",
    item: {
        "externalId": "ExternalId",
        "systemNumber": "SystemNumber"
    },
    operate: [{
            run: (value, context) => value[0].TextType,
            on: "externalId"
        },
        {
            run: (value, context) => value[0].TextType,
            on: "systemNumber"
        }
    ]
}

const ListOfCandidateAddress = {
    list: "list",
    item: {
        "line1": "AddressLine1",
        "line2": "AddressLine2",
        "line3": "AddressLine3",
        "line4": "AddressLine4",
        "line5": "AddressLine5",
        "line6": "AddressLine6",
        "line7": "AddressLine7",
        "line8": "AddressLine8",
        "line9": "AddressLine9",
        "deliveryPointTypeCode": "DeliveryPointTypeCode",
        "longPostalCode": "LongPostalCode",
        "cityName": "CityName",
        "stateName": "StateName",
        "postalCode": "PostalCode",
        "countryCode": "CountryCode",
        "type": "AddressType",
        "relationshipType": "RelationshipType",
        "occupancy": "Occupancy",
        "startDate": "StartDate",
        "endDate": "EndDate"
    },
    operate: [{
            run: (value) => !value ? null : _.invert(config.config.allMaps.LineFive)[value],
            on: "line5"
        },
        {
            run: (value) => !value ? null : _.invert(config.config.allMaps.LineEight)[value],
            on: "line8"
        },
        {
            run: (value) => !value ? null : _.invert(config.config.allMaps.LineNine)[value],
            on: "line9"
        },
        {
            run: (value) => !value ? null : _.invert(config.config.allMaps.RelationshipType)[value],
            on: "type"
        },
        {
            run: (value) => !value ? null : _.invert(config.config.allMaps.RelationshipType)[value],
            on: "relationshipType"
        }
    ]
}

const inputData = (data) => {
    data = {
        input: [{
            all: data
        }]
    };
    return data;
};
//process.env.useMock
module.exports = (json) => utils.removeNull(DataTransform(inputData(json), map).transform(json)[0]);