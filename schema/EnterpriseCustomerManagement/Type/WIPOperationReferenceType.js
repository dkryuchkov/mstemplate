var Modeler = require("../Modeler.js");
var className = 'TypeWIPOperationReferenceType';

var TypeWIPOperationReferenceType = function(json, parentObj) {
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
    WIPOperationIdentification: {
      type: "TypeWIPOperationIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WIPOperationIdentification",
        type: "WIPOperationIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomWIPOperationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomWIPOperationReferenceType",
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
    WIPOperationIdentification: {
      type: "TypeWIPOperationIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WIPOperationIdentification",
        type: "WIPOperationIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomWIPOperationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomWIPOperationReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeWIPOperationReferenceType;
Modeler.register(TypeWIPOperationReferenceType, "TypeWIPOperationReferenceType");
