var Modeler = require("../Modeler.js");
var className = 'ElementChargePaymentInstrument';

var ElementChargePaymentInstrument = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ChargePaymentInstrument: {
      type: "TypePaymentInstrumentType",
      wsdlDefinition: {
        name: "ChargePaymentInstrument",
        type: "PaymentInstrumentType",
        "xsd:annotation": {
          "xsd:documentation": "Details about different payment means are used for applicable charges"
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
	  ChargePaymentInstrument: {
      type: "TypePaymentInstrumentType",
      wsdlDefinition: {
        name: "ChargePaymentInstrument",
        type: "PaymentInstrumentType",
        "xsd:annotation": {
          "xsd:documentation": "Details about different payment means are used for applicable charges"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementChargePaymentInstrument;
Modeler.register(ElementChargePaymentInstrument, "ElementChargePaymentInstrument");
