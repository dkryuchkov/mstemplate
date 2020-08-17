var Modeler = require("../Modeler.js");
var className = 'TypeLinkedContactType';

var TypeLinkedContactType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Id: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:Id",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LastUpdated: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:LastUpdated",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreatedDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:CreatedDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LinkedContactId: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:LinkedContactId",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LinkStartType: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:LinkStartType",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LinkEndType: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:LinkEndType",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LinkStartDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:LinkStartDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LinkEndDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:LinkEndDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LinkedContactFirstName: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:LinkedContactFirstName",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LinkedContactLastName: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:LinkedContactLastName",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LinkedContactIntegrationId: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:LinkedContactIntegrationId",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Score: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:Score",
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
	  Id: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:Id",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LastUpdated: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:LastUpdated",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreatedDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:CreatedDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LinkedContactId: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:LinkedContactId",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LinkStartType: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:LinkStartType",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LinkEndType: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:LinkEndType",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LinkStartDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:LinkStartDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LinkEndDate: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:LinkEndDate",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LinkedContactFirstName: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:LinkedContactFirstName",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LinkedContactLastName: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:LinkedContactLastName",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LinkedContactIntegrationId: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:LinkedContactIntegrationId",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Score: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:Score",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeLinkedContactType;
Modeler.register(TypeLinkedContactType, "TypeLinkedContactType");
