var Modeler = require("../Modeler.js");
var className = 'TypeFacilityAccountType';

var TypeFacilityAccountType = function(json, parentObj) {
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
    PartyUId: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:PartyUId",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Relationship: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Relationship",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Comments: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Comments",
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
    Nickname: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Nickname",
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
    IntegrationId: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:IntegrationId",
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
    PartyUId: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:PartyUId",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Relationship: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Relationship",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Comments: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Comments",
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
    Nickname: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Nickname",
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
    IntegrationId: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:IntegrationId",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeFacilityAccountType;
Modeler.register(TypeFacilityAccountType, "TypeFacilityAccountType");
