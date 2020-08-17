var Modeler = require("../Modeler.js");
var className = 'ElementOperationIdentification';

var ElementOperationIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OperationIdentification: {
      type: "TypeOperationIdentificationType",
      wsdlDefinition: {
        name: "OperationIdentification",
        type: "OperationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Operation"
        },
        ns: "WL5G3N2",
        attribute: false
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
        name: "OperationIdentification",
        type: "OperationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Operation"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOperationIdentification;
Modeler.register(ElementOperationIdentification, "ElementOperationIdentification");
