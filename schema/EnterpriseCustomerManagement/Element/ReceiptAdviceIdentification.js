var Modeler = require("../Modeler.js");
var className = 'ElementReceiptAdviceIdentification';

var ElementReceiptAdviceIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ReceiptAdviceIdentification: {
      type: "TypeReceiptAdviceIdentificationType",
      wsdlDefinition: {
        name: "ReceiptAdviceIdentification",
        type: "ReceiptAdviceIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification to an instance of the ReceiptAdvice object"
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
	  ReceiptAdviceIdentification: {
      type: "TypeReceiptAdviceIdentificationType",
      wsdlDefinition: {
        name: "ReceiptAdviceIdentification",
        type: "ReceiptAdviceIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification to an instance of the ReceiptAdvice object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementReceiptAdviceIdentification;
Modeler.register(ElementReceiptAdviceIdentification, "ElementReceiptAdviceIdentification");
