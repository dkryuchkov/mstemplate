var Modeler = require("../Modeler.js");
var className = 'ElementWIPOperationIdentification';

var ElementWIPOperationIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  WIPOperationIdentification: {
      type: "TypeWIPOperationIdentificationType",
      wsdlDefinition: {
        name: "WIPOperationIdentification",
        type: "WIPOperationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a WIP Operation"
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
	  WIPOperationIdentification: {
      type: "TypeWIPOperationIdentificationType",
      wsdlDefinition: {
        name: "WIPOperationIdentification",
        type: "WIPOperationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a WIP Operation"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementWIPOperationIdentification;
Modeler.register(ElementWIPOperationIdentification, "ElementWIPOperationIdentification");
