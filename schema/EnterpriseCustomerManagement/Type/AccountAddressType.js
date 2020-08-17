var Modeler = require("../Modeler.js");
var className = 'TypeAccountAddressType';

var TypeAccountAddressType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
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
    LastUpdByExternalUser: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:LastUpdByExternalUser",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreatedByExternalUser: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:CreatedByExternalUser",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LastUpdBySystem: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:LastUpdBySystem",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreatedBySystem: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:CreatedBySystem",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RecordStatus: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:RecordStatus",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RecDeletedDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:RecDeletedDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DelByExternalUser: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:DelByExternalUser",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Purpose: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Purpose",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Channel: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Channel",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AccountAddressId: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:AccountAddressId",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AccountId: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:AccountId",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AccountStreetAddress: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:AccountStreetAddress",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Updated: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Updated",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Created: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Created",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ApartmentNumber: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ApartmentNumber",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    City: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:City",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Country: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Country",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DPID: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:DPID",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Descriptor: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Descriptor",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EndDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:EndDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LastValidationDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:LastValidationDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LevelNumber: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:LevelNumber",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MailingStatus: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:MailingStatus",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Occupancy: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Occupancy",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PostOfficeBoxNumber: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:PostOfficeBoxNumber",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PostalCode: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:PostalCode",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PostalDeliveryType: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:PostalDeliveryType",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PrimaryFlag: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:PrimaryFlag",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PropertyId: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:PropertyId",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RelationshipType: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:RelationshipType",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    StartDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:StartDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    State: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:State",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    StreetName: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:StreetName",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    StreetNumber: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:StreetNumber",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    StreetType: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:StreetType",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    StreetTypeSuffix: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:StreetTypeSuffix",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AddressType: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:AddressType",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    UnitType: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:UnitType",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ValidationStatus: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ValidationStatus",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Addressee: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Addressee",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AccountStreetAddress2: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:AccountStreetAddress2",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OrganizationName: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:OrganizationName",
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
    LastUpdByExternalUser: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:LastUpdByExternalUser",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreatedByExternalUser: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:CreatedByExternalUser",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LastUpdBySystem: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:LastUpdBySystem",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreatedBySystem: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:CreatedBySystem",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RecordStatus: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:RecordStatus",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RecDeletedDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:RecDeletedDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DelByExternalUser: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:DelByExternalUser",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Purpose: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Purpose",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Channel: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Channel",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AccountAddressId: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:AccountAddressId",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AccountId: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:AccountId",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AccountStreetAddress: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:AccountStreetAddress",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Updated: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Updated",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Created: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Created",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ApartmentNumber: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ApartmentNumber",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    City: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:City",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Country: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Country",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DPID: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:DPID",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Descriptor: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Descriptor",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EndDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:EndDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LastValidationDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:LastValidationDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LevelNumber: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:LevelNumber",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    MailingStatus: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:MailingStatus",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Occupancy: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Occupancy",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PostOfficeBoxNumber: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:PostOfficeBoxNumber",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PostalCode: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:PostalCode",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PostalDeliveryType: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:PostalDeliveryType",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PrimaryFlag: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:PrimaryFlag",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PropertyId: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:PropertyId",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RelationshipType: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:RelationshipType",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    StartDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:StartDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    State: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:State",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    StreetName: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:StreetName",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    StreetNumber: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:StreetNumber",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    StreetType: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:StreetType",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    StreetTypeSuffix: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:StreetTypeSuffix",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AddressType: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:AddressType",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    UnitType: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:UnitType",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ValidationStatus: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ValidationStatus",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Addressee: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Addressee",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AccountStreetAddress2: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:AccountStreetAddress2",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OrganizationName: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:OrganizationName",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAccountAddressType;
Modeler.register(TypeAccountAddressType, "TypeAccountAddressType");
