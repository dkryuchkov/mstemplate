var Modeler = require("../Modeler.js");
var className = 'TypeContactWebsiteCommunicationType';

var TypeContactWebsiteCommunicationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    WebsiteCommunication: {
      type: "TypeWebsiteCommunicationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WebsiteCommunication",
        type: "WebsiteCommunicationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Status: {
      type: "TypeStatusType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Status",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "Status of the communication point. Example values are Active, Inactive, Delete, Do Not Call."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomContactWebsiteCommunicationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomContactWebsiteCommunicationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    actionCode: {
      type: "TypeActionCodeType",
      wsdlDefinition: {
        name: "actionCode",
        type: "ActionCodeType",
        attribute: true
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
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    WebsiteCommunication: {
      type: "TypeWebsiteCommunicationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WebsiteCommunication",
        type: "WebsiteCommunicationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Status: {
      type: "TypeStatusType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Status",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "Status of the communication point. Example values are Active, Inactive, Delete, Do Not Call."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomContactWebsiteCommunicationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomContactWebsiteCommunicationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    actionCode: {
      type: "TypeActionCodeType",
      wsdlDefinition: {
        name: "actionCode",
        type: "ActionCodeType",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeContactWebsiteCommunicationType;
Modeler.register(TypeContactWebsiteCommunicationType, "TypeContactWebsiteCommunicationType");
