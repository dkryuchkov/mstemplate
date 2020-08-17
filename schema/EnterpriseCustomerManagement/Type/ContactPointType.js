var Modeler = require("../Modeler.js");
var className = 'TypeContactPointType';

var TypeContactPointType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Address: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Address",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BusinessName: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:BusinessName",
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
    CreatedDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:CreatedDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DeletedByExternalUser: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:DeletedByExternalUser",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Description: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Description",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Email: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Email",
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
    LastUpdated: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:LastUpdated",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LastUpdatedByExternalUser: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:LastUpdatedByExternalUser",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LastUpdatedBySystem: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:LastUpdatedBySystem",
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
    OrganizationId: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:OrganizationId",
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
    },
    Phone: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Phone",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Position: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Position",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RecordDeletedDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:RecordDeletedDate",
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
    Role: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Role",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ChangeIndicator: {
      type: "TypeChangeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ChangeIndicator",
        type: "ChangeIndicatorType",
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
	  Address: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Address",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BusinessName: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:BusinessName",
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
    CreatedDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:CreatedDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DeletedByExternalUser: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:DeletedByExternalUser",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Description: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Description",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Email: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Email",
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
    LastUpdated: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:LastUpdated",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LastUpdatedByExternalUser: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:LastUpdatedByExternalUser",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LastUpdatedBySystem: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:LastUpdatedBySystem",
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
    OrganizationId: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:OrganizationId",
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
    },
    Phone: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Phone",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Position: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Position",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RecordDeletedDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:RecordDeletedDate",
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
    Role: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:Role",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ChangeIndicator: {
      type: "TypeChangeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecomcust:ChangeIndicator",
        type: "ChangeIndicatorType",
        attribute: false,
        ns: "corecomcust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeContactPointType;
Modeler.register(TypeContactPointType, "TypeContactPointType");
