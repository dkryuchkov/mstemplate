module.exports = {
    input_body: {
        "customerType": "Individual",
        "customerState": "Prospect",
        "shareInfo": "Y",
        "secondaryPurpose": "Y",
        "name": {
            "title": "Mr",
            "firstName": "Jo",
            "lastName": "Bloggs",
            "gender": "Male"
        },
        "indAdditionalInfo": {
            "dob": "01/01/1977",
            "industry": 30,
            "occupationCode": "O799215",
            "maritalstatus": "Married",
            "middleName": "Mr"
        },
        "address": [{
            "line1": "Lot 56",
            "line2": "601",
            "line3": "L 6",
            "line4": "Test P3",
            "line5": "APARTMENT",
            "line6": "55",
            "line7": "Bourke",
            "line8": "STREET",
            "line9": "CENTRAL",
            "longPostalCode": "99",
            "cityName": "DOCKLANDS",
            "stateName": "VIC",
            "postalCode": "3008",
            "countryCode": "AU",
            "type": "Home",
            "relationshipType": "Home",
            "occupancy": "Boarding",
            "startDate": "2018-01-01"
        }],
        "contactPoints": [
            {
            "type": "PHONE",
            "usetype": "Fixed Landline Work",
            "typecode": "Land Line",
            "communication": {
                    "countryCode": "61",
                    "phoneNumber": "423009123"
            },
            "startDate": "2017-01-01"
        },
        {
            "type": "EMAIL",
            "usetype": "Work",
            "typecode": "Silent",
            "communication": {
                "emailAddress": "work@nab.com.au"
            },
            "startDate": "2018-10-01"
        }
    ]
    },

    output_body: {
        "SyncCustomerPartyListEBM": {
            "EBMHeader": {
                "VerbCode": "Upsert",
                "Sender": {
                    "ID": "NABOne",
                    "UserID": "SIT4WMQ3",
                    "UserRole": "BANKER",
                    "ESBHeaderExtension": [{
                            "Name": "Channel",
                            "Value": "BRANCH"
                        },
                        {
                            "Name": "TargetUnit",
                            "Value": "BUSINESS BANKING"
                        },
                        {
                            "Name": "Brand",
                            "Value": "NAB"
                        }
                    ]
                },
                "Target": {
                    "ID": "OCH",
                    "ServiceName": "PersonService_Upsert"
                },
                "EBMTracking": {
                    "ExecutionUnitID": "c6503a48-1f40-4e94-861f-05a094a12e7c"
                }
            },
            "DataArea": {
                "SyncCustomerPartyList": {
                    "Identification": {
                        "ContextID": "IND"
                    },
                    "PartyLocation": [{
                            "LocationReference": {
                                "Address": {
                                    "LineOne": "Lot 56",
                                    "LineTwo": "601",
                                    "LineThree": "L 6",
                                    "LineFour": "Test P3",
                                    "LineFive": "APT",
                                    "LineSix": "55",
                                    "LineSeven": "Bourke",
                                    "LineEight": "ACCS",
                                    "LineNine": "CN",
                                    "CityName": "DOCKLANDS",
                                    "StateName": "VIC",
                                    "CountryCode": "AU",
                                    "PostalCode": "3008",
                                    "LongPostalCode": "99",
                                    "Custom": {
                                        "CreatedSystem": "NABOne",
                                        "CreatedUser": "SIT4WMQ3",
                                        "LastUpdatedUser": "SIT4WMQ3",
                                        "OrganizationName": "08",
                                        "RelationshipType": "HOM",
                                        "StartDate": "10/01/2018",
                                        "UpdatedSystem": "NABOne",
                                        "IsOBPAddress": "Y"
                                    }
                                }
                            }
                        },
                        {
                            "LocationReference": {
                                "Address": {
                                    "LineTwo": "701",
                                    "LineThree": "7",
                                    "LineFour": "TestP2",
                                    "LineFive": "APT",
                                    "LineSix": "55",
                                    "LineSeven": "Bourke",
                                    "LineEight": "ACCS",
                                    "LineNine": "CN",
                                    "CityName": "DOCKLANDS",
                                    "StateName": "VIC",
                                    "CountryCode": "AU",
                                    "PostalCode": "3008",
                                    "Custom": {
                                        "CreatedSystem": "NABOne",
                                        "CreatedUser": "SIT4WMQ3",
                                        "LastUpdatedUser": "SIT4WMQ3",
                                        "OrganizationName": "08",
                                        "RelationshipType": "COM",
                                        "StartDate": "10/01/2018",
                                        "UpdatedSystem": "NABOne",
                                        "IsOBPAddress": "Y"
                                    }
                                }
                            }
                        }
                    ],
                    "PartyContact": {
                        "Contact": {
                            "ContactPhoneCommunication": {
                                "PhoneCommunication": {
                                    "LocalNumber": "0423009123",
                                    "UseCode": "PSL",
                                    "TypeCode": "CLR",
                                    "Preference": {
                                        "PreferredIndicator": "true"
                                    }
                                },
                                "Custom": {
                                    "CreatedSystem": "NABOne",
                                    "CreatedUser": "SIT4WMQ3",
                                    "ConcatenatedNumber": "0423009123",
                                    "ContactPoint": "CLR",
                                    "EffectiveStartDate": "10/01/2018",
                                    "LastUpdatedSystem": "NABOne",
                                    "LastUpdatedUser": "SIT4WMQ3",
                                    "OrganizationName": "08",
                                    "Purpose": "COMM"
                                }
                            },
                            "ContactEmailCommunication": {
                                "EmailCommunication": {
                                    "URI": "sasdas@jandjsa.com",
                                    "UseCode": "PSL",
                                    "Preference": {
                                        "PreferredIndicator": "true"
                                    }
                                },
                                "Custom": {
                                    "ContactPoint": "ELA",
                                    "CreatedSystem": "NABOne",
                                    "CreatedUser": "SIT4WMQ3",
                                    "EffectiveStartDate": "10/01/2018",
                                    "LastUpdatedSystem": "NABOne",
                                    "LastUpdatedUser": "SIT4WMQ3",
                                    "OrganizationName": "08",
                                    "Purpose": "COMM"
                                }
                            }
                        }
                    },
                    "Person": {
                        "GenderCode": "MAL",
                        "PersonName": {
                            "FirstName": "GRAEME",
                            "MiddleName": "XPPPFFP",
                            "FamilyName": "MURPHY",
                            "Title": "18"
                        },
                        "Custom": {
                            "BirthDate": "06/24/1950",
                            "Industry": "30",
                            "OccupationCode": "O799215",
                            "FATCAIdNumber": "123456777",
                            "FATCAUSCitizen": "Y"
                        }
                    },
                    "TypeCode": "IND",
                    "Custom": {
                        "CreatedSystem": "NABOne",
                        "CreatedUser": "SIT4WMQ3",
                        "LastUpdatedSys": "NABOne",
                        "LastUpdatedUser": "SIT4WMQ3",
                        "NonResidentIndicator": "N",
                        "Organization": "NAB",
                        "PartyState": "51",
                        "PartyRoles": {
                            "PartyRole": {
                                "OrganizationName": "08",
                                "RoleCode": "51"
                            }
                        },
                        "Brand": "NAB",
                        "ListOfContactPosition": {
                            "ContactPosition": {
                                "Division": "Siebel Administration",
                                "Position": "409649275"
                            }
                        }
                    }
                }
            }
        }
    }
}