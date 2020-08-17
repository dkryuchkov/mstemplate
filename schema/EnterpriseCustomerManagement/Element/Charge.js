var Modeler = require("../Modeler.js");
var className = 'ElementCharge';

var ElementCharge = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Charge: {
      type: "TypeChargeType",
      wsdlDefinition: {
        name: "Charge",
        type: "ChargeType",
        "xsd:annotation": {
          "xsd:documentation": "A component of pricing that increases the value of a price"
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
	  Charge: {
      type: "TypeChargeType",
      wsdlDefinition: {
        name: "Charge",
        type: "ChargeType",
        "xsd:annotation": {
          "xsd:documentation": "A component of pricing that increases the value of a price"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCharge;
Modeler.register(ElementCharge, "ElementCharge");
