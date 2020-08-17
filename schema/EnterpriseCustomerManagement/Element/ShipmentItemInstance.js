var Modeler = require("../Modeler.js");
var className = 'ElementShipmentItemInstance';

var ElementShipmentItemInstance = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentItemInstance: {
      type: "TypeShipmentItemInstanceType",
      wsdlDefinition: {
        name: "ShipmentItemInstance",
        type: "ShipmentItemInstanceType",
        "xsd:annotation": {
          "xsd:documentation": "An individual serial number included in the shipment item. Serial numbers may be specified using multiple ShipmentItemInstanceRange instances (multiples are used when ranges are not continuous) or a list of ShipmentItemInstance instances or combinations of both."
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
	  ShipmentItemInstance: {
      type: "TypeShipmentItemInstanceType",
      wsdlDefinition: {
        name: "ShipmentItemInstance",
        type: "ShipmentItemInstanceType",
        "xsd:annotation": {
          "xsd:documentation": "An individual serial number included in the shipment item. Serial numbers may be specified using multiple ShipmentItemInstanceRange instances (multiples are used when ranges are not continuous) or a list of ShipmentItemInstance instances or combinations of both."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipmentItemInstance;
Modeler.register(ElementShipmentItemInstance, "ElementShipmentItemInstance");
