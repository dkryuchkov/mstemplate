var Modeler = require("../Modeler.js");
var className = 'TypeWIPEntityLineReferenceType';

var TypeWIPEntityLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  WIPEntityIdentification: {
      type: "TypeWIPEntityIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WIPEntityIdentification",
        type: "WIPEntityIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    WIPEntityLineIdentification: {
      type: "TypeWIPEntityLineIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WIPEntityLineIdentification",
        type: "WIPEntityLineIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomWIPEntityLineReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomWIPEntityLineReferenceType",
        attribute: false,
        ns: "WL5G3N2"
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
	  WIPEntityIdentification: {
      type: "TypeWIPEntityIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WIPEntityIdentification",
        type: "WIPEntityIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    WIPEntityLineIdentification: {
      type: "TypeWIPEntityLineIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WIPEntityLineIdentification",
        type: "WIPEntityLineIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomWIPEntityLineReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomWIPEntityLineReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeWIPEntityLineReferenceType;
Modeler.register(TypeWIPEntityLineReferenceType, "TypeWIPEntityLineReferenceType");
