var Modeler = require("../Modeler.js");
var className = 'ElementFreightCharge';

var ElementFreightCharge = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FreightCharge: {
      type: "TypeChargeType",
      wsdlDefinition: {
        name: "FreightCharge",
        type: "ChargeType",
        "xsd:annotation": {
          "xsd:documentation": "Infrormation about Freight Charge"
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
	  FreightCharge: {
      type: "TypeChargeType",
      wsdlDefinition: {
        name: "FreightCharge",
        type: "ChargeType",
        "xsd:annotation": {
          "xsd:documentation": "Infrormation about Freight Charge"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFreightCharge;
Modeler.register(ElementFreightCharge, "ElementFreightCharge");
