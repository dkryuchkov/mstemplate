var Modeler = require("../Modeler.js");
var className = 'TypeOperationReferenceType';

var TypeOperationReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OperationIdentification: {
      type: "TypeOperationIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OperationIdentification",
        type: "OperationIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomOperationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomOperationReferenceType",
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
	  OperationIdentification: {
      type: "TypeOperationIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OperationIdentification",
        type: "OperationIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomOperationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomOperationReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeOperationReferenceType;
Modeler.register(TypeOperationReferenceType, "TypeOperationReferenceType");
