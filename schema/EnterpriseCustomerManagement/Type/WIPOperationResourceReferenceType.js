var Modeler = require("../Modeler.js");
var className = 'TypeWIPOperationResourceReferenceType';

var TypeWIPOperationResourceReferenceType = function(json, parentObj) {
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
    WIPOperationResourceIdentification: {
      type: "TypeWIPOperationResourceIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WIPOperationResourceIdentification",
        type: "WIPOperationResourceIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomWIPOperationResourceReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomWIPOperationResourceReferenceType",
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
    WIPOperationResourceIdentification: {
      type: "TypeWIPOperationResourceIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WIPOperationResourceIdentification",
        type: "WIPOperationResourceIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomWIPOperationResourceReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomWIPOperationResourceReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeWIPOperationResourceReferenceType;
Modeler.register(TypeWIPOperationResourceReferenceType, "TypeWIPOperationResourceReferenceType");
