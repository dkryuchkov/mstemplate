var Modeler = require("../Modeler.js");
var className = 'ElementShipmentCharge';

var ElementShipmentCharge = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentCharge: {
      type: "TypeShipmentChargeType",
      wsdlDefinition: {
        name: "ShipmentCharge",
        type: "ShipmentChargeType",
        "xsd:annotation": {
          "xsd:documentation": "Charge applicable for a shipment as a whole"
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
	  ShipmentCharge: {
      type: "TypeShipmentChargeType",
      wsdlDefinition: {
        name: "ShipmentCharge",
        type: "ShipmentChargeType",
        "xsd:annotation": {
          "xsd:documentation": "Charge applicable for a shipment as a whole"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipmentCharge;
Modeler.register(ElementShipmentCharge, "ElementShipmentCharge");
