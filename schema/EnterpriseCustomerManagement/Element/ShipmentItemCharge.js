var Modeler = require("../Modeler.js");
var className = 'ElementShipmentItemCharge';

var ElementShipmentItemCharge = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentItemCharge: {
      type: "TypeShipmentItemChargeType",
      wsdlDefinition: {
        name: "ShipmentItemCharge",
        type: "ShipmentItemChargeType",
        "xsd:annotation": {
          "xsd:documentation": "Charge applicable for a shipment item"
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
	  ShipmentItemCharge: {
      type: "TypeShipmentItemChargeType",
      wsdlDefinition: {
        name: "ShipmentItemCharge",
        type: "ShipmentItemChargeType",
        "xsd:annotation": {
          "xsd:documentation": "Charge applicable for a shipment item"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipmentItemCharge;
Modeler.register(ElementShipmentItemCharge, "ElementShipmentItemCharge");
