var Modeler = require("../Modeler.js");
var className = 'ElementPaymentInstrument';

var ElementPaymentInstrument = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PaymentInstrument: {
      type: "TypePaymentInstrumentType",
      wsdlDefinition: {
        name: "PaymentInstrument",
        type: "PaymentInstrumentType",
        "xsd:annotation": {
          "xsd:documentation": "Details about different payment means are used for making a specific payment"
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
	  PaymentInstrument: {
      type: "TypePaymentInstrumentType",
      wsdlDefinition: {
        name: "PaymentInstrument",
        type: "PaymentInstrumentType",
        "xsd:annotation": {
          "xsd:documentation": "Details about different payment means are used for making a specific payment"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPaymentInstrument;
Modeler.register(ElementPaymentInstrument, "ElementPaymentInstrument");
