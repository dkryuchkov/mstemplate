var Modeler = require("../Modeler.js");
var className = 'TypeWIPEntityReferenceType';

var TypeWIPEntityReferenceType = function(json, parentObj) {
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
    WIPOperationReference: {
      type: "TypeWIPOperationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WIPOperationReference",
        type: "WIPOperationReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    WIPEntityLineReference: {
      type: "TypeWIPEntityLineReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WIPEntityLineReference",
        type: "WIPEntityLineReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomWIPEntityReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomWIPEntityReferenceType",
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
    WIPOperationReference: {
      type: "TypeWIPOperationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WIPOperationReference",
        type: "WIPOperationReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    WIPEntityLineReference: {
      type: "TypeWIPEntityLineReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WIPEntityLineReference",
        type: "WIPEntityLineReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomWIPEntityReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomWIPEntityReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeWIPEntityReferenceType;
Modeler.register(TypeWIPEntityReferenceType, "TypeWIPEntityReferenceType");
