var Modeler = require("../Modeler.js");
var className = 'TypeWarningIndicatorType';

var TypeWarningIndicatorType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ID: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:ID",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Name: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "1",
        name: "corecustomerpartycust:Name",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    Value: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "1",
        name: "corecustomerpartycust:Value",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    WarningArea: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:WarningArea",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    WarningIssue: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:WarningIssue",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Status: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:Status",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OrganizationName: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:OrganizationName",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreatedBySystem: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:CreatedBySystem",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreatedByExternalUser: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:CreatedByExternalUser",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LastUpdatedBySystem: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:LastUpdatedBySystem",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LastUpdatedByExternalUser: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:LastUpdatedByExternalUser",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DeletedDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:DeletedDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DeletedBy: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:DeletedBy",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    StartDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:StartDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ClosedDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:ClosedDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SourceLastModifiedDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:SourceLastModifiedDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    NarrativeDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:NarrativeDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    WarningText: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:WarningText",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RecordStatus: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:RecordStatus",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RecordDeletedDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:RecordDeletedDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ChangeIndicator: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:ChangeIndicator",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
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
	  ID: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:ID",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Name: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "1",
        name: "corecustomerpartycust:Name",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    Value: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "1",
        name: "corecustomerpartycust:Value",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: true
    },
    WarningArea: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:WarningArea",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    WarningIssue: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:WarningIssue",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Status: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:Status",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OrganizationName: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:OrganizationName",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreatedBySystem: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:CreatedBySystem",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreatedByExternalUser: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:CreatedByExternalUser",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LastUpdatedBySystem: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:LastUpdatedBySystem",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LastUpdatedByExternalUser: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:LastUpdatedByExternalUser",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DeletedDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:DeletedDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DeletedBy: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:DeletedBy",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    StartDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:StartDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ClosedDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:ClosedDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SourceLastModifiedDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:SourceLastModifiedDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    NarrativeDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:NarrativeDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    WarningText: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:WarningText",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RecordStatus: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:RecordStatus",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RecordDeletedDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:RecordDeletedDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ChangeIndicator: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:ChangeIndicator",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeWarningIndicatorType;
Modeler.register(TypeWarningIndicatorType, "TypeWarningIndicatorType");
