module.exports = {
    input_body: {
        "minMatchThreshold": 10,
        searchAttributes: [{
                "key": "CustomerType",
                "value": "IND"
            },
            {
                "key": "Name",
                "value": "GRAEME MURPHY"
            },
            {
                "key": "Brand",
                "value": "NAB"
            },
            {
                "key": "MobilePhone",
                "value": "61423009123"
            },
            {
                "key": "BirthDate",
                "value": "06/24/1950"
            },
            {
                "key": "EmailAddress",
                "value": "sasdas@jandjsa.com"
            },
        ]
    },
    response_body: {
        "EBMHeader": {
            "EBMTracking": {
                "ExecutionUnitID": "c6503a48-1f40-4e94-861f-05a094b12e7c"
            }
        },
        "DataArea": {
            "QueryCustomerPartyListResponse": {
                "PartyContact": {
                    "Contact": {
                        "Custom": {
                            "Driver": {
                                "PartyType": "IND",
                                "FirstName": "GRAEME",
                                "Brand": "NAB",
                                "LastName": "MURPHY",
                                "BirthDate": "06/24/1950",
                                "MobilePhone": "61423009123",
                                "EmailAddress": "sasdas@jandjsa.com",
                                "ListOfCandidate": {
                                    "Candidate": {
                                        "MatchScore": "98",
                                        "FirstName": "GRAEME",
                                        "MiddleName": "XPPPFFP",
                                        "LastName": "MURPHY",
                                        "CGID": "400062190777",
                                        "BirthDate": "06/24/1950",
                                        "MobilePhone": "61423009123",
                                        "EmailAddress": "sasdas@jandjsa.com",
                                        "Title": "18",
                                        "Type": "IND",
                                        "IdentityVerificationStatus": "UNC",
                                        "Status": "Active",
                                        "PartyState": "Prospect",
                                        "MEID": "000105931",
                                        "Brand": "NAB",
                                        "GoldenID": "400062190783",
                                        "ListOfCandidateAddress": {
                                            "CandidateAddress": {
                                                "AddressLine1": "Test P3 Lot 56 L 6 601/55 Bourke ACCS CN",
                                                "AddressLine2": "DOCKLANDS, VIC, 3008, AU",
                                                "PostalCode": "3008",
                                                "AddressType": "HOM"
                                            }
                                        },
                                        "ListOfContactReference": {
                                            "ContactReference": {
                                                "ExternalId": "000105931",
                                                "SystemNumber": "ME"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    output_body: {
        "QueryCustomerPartyListEBM": {
            "EBMHeader": {
                "Sender": {
                    "ID": "NABOne",
                    "UserID": "user1",
                    "ESBHeaderExtension": [{
                        "Name": "Channel",
                        "Value": "BRANCH"
                    }, {
                        "Name": "TargetUnit",
                        "Value": "BUSINESS BANKING"
                    }, {
                        "Name": "Brand",
                        "Value": "NAB"
                    }]
                },
                "Target": {
                    "ID": "OCH",
                    "ServiceName": "PersonService_Upsert"
                },
                "EBMTracking": {
                    "ExecutionUnitID": "c6503a48-1f40-4e94-861f-05a094a12e7c"
                },
                "VerbCode": "Upsert",
                "UserRole": "BANKER"
            },
            "DataArea": {
                "Query": {
                    "QueryCode": {},
                    "ResponseCode": "",
                    "QueryCriteria": {
                        "QueryExpression": {
                            "ValueExpression": {
                                "ElementPath": "firstname",
                                "Value": "John"
                            },
                            "logicalOperatorCode": "OR",
                            "QueryExpression": {
                                "ValueExpression": {
                                    "ElementPath": "lastname",
                                    "Value": "Bloggs"
                                }
                            }
                        },
                        "SortElement": "lastname"
                    }
                }
            }
        }
    }
}
