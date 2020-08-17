var Modeler = require("../Modeler.js");
var className = 'ElementReceiptMethodIdentification';

var ElementReceiptMethodIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ReceiptMethodIdentification: {
      type: "TypeReceiptMethodIdentificationType",
      wsdlDefinition: {
        name: "ReceiptMethodIdentification",
        type: "ReceiptMethodIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a ReceiptMethod"
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
	  ReceiptMethodIdentification: {
      type: "TypeReceiptMethodIdentificationType",
      wsdlDefinition: {
        name: "ReceiptMethodIdentification",
        type: "ReceiptMethodIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a ReceiptMethod"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementReceiptMethodIdentification;
Modeler.register(ElementReceiptMethodIdentification, "ElementReceiptMethodIdentification");
