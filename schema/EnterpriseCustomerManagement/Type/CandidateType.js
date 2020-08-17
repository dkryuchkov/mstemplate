var Modeler = require("../Modeler.js");
var className = 'TypeCandidateType';

var TypeCandidateType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  MatchScore: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:MatchScore",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Id: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Id",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TaxNumber: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:TaxNumber",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Name: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Name",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FirstName: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:FirstName",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MiddleName: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:MiddleName",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MiddleNameTwo: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:MiddleNameTwo",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LastName: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:LastName",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CGID: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:CGID",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MEID: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:MEID",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BirthDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:BirthDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EstablishmentDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:EstablishmentDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OriginatingSystem: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:OriginatingSystem",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    HomePhone: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:HomePhone",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    WorkPhone: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:WorkPhone",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MobilePhone: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:MobilePhone",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EmailAddress: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:EmailAddress",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Title: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Title",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TitleCode: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:TitleCode",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Type: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Type",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ABN: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ABN",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ACN: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ACN",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CCN: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:CCN",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Brand: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Brand",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Status: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Status",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PartyState: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:PartyState",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IdentityVerificationStatus: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:IdentityVerificationStatus",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IdentityVerificationStage: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:IdentityVerificationStage",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    NIN: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:NIN",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ListOfCandidateAddress: {
      type: "TypeListOfCandidateAddressType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ListOfCandidateAddress",
        type: "ListOfCandidateAddressType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ListOfContactReference: {
      type: "TypeListOfContactReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ListOfContactReference",
        type: "ListOfContactReferenceType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    GoldenID: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:GoldenID",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  MatchScore: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:MatchScore",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Id: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Id",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TaxNumber: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:TaxNumber",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Name: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Name",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FirstName: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:FirstName",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MiddleName: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:MiddleName",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MiddleNameTwo: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:MiddleNameTwo",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LastName: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:LastName",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CGID: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:CGID",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MEID: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:MEID",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BirthDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:BirthDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EstablishmentDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:EstablishmentDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OriginatingSystem: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:OriginatingSystem",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    HomePhone: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:HomePhone",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    WorkPhone: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:WorkPhone",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MobilePhone: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:MobilePhone",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EmailAddress: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:EmailAddress",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Title: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Title",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TitleCode: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:TitleCode",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Type: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Type",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ABN: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ABN",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ACN: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ACN",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CCN: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:CCN",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Brand: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Brand",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Status: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Status",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PartyState: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:PartyState",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IdentityVerificationStatus: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:IdentityVerificationStatus",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IdentityVerificationStage: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:IdentityVerificationStage",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    NIN: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:NIN",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ListOfCandidateAddress: {
      type: "TypeListOfCandidateAddressType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ListOfCandidateAddress",
        type: "ListOfCandidateAddressType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ListOfContactReference: {
      type: "TypeListOfContactReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ListOfContactReference",
        type: "ListOfContactReferenceType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    GoldenID: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:GoldenID",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCandidateType;
Modeler.register(TypeCandidateType, "TypeCandidateType");
