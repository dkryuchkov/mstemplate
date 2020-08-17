var Modeler = require("../Modeler.js");
var className = 'TypeFaultType';

var TypeFaultType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EBMReference: {
      type: "TypeEBMReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EBMReference",
        type: "EBMReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    B2BMReference: {
      type: "TypeB2BMReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:B2BMReference",
        type: "B2BMReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "B2B related information for the failed transaction."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FaultNotification: {
      type: "TypeFaultNotificationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:FaultNotification",
        type: "FaultNotificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    languageCode: {
      type: "TypeLanguageCodeType",
      wsdlDefinition: {
        default: "en-US",
        name: "languageCode",
        type: "LanguageCodeType",
        use: "optional",
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
	  EBMReference: {
      type: "TypeEBMReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EBMReference",
        type: "EBMReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    B2BMReference: {
      type: "TypeB2BMReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:B2BMReference",
        type: "B2BMReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "B2B related information for the failed transaction."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FaultNotification: {
      type: "TypeFaultNotificationType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:FaultNotification",
        type: "FaultNotificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    languageCode: {
      type: "TypeLanguageCodeType",
      wsdlDefinition: {
        default: "en-US",
        name: "languageCode",
        type: "LanguageCodeType",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeFaultType;
Modeler.register(TypeFaultType, "TypeFaultType");
