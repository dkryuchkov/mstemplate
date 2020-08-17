var Modeler = require("../Modeler.js");
var className = 'ElementShipmentItemInstanceRange';

var ElementShipmentItemInstanceRange = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentItemInstanceRange: {
      type: "TypeShipmentItemInstanceRangeType",
      wsdlDefinition: {
        name: "ShipmentItemInstanceRange",
        type: "ShipmentItemInstanceRangeType",
        "xsd:annotation": {
          "xsd:documentation": "A range of serial numbers included in a shipment item. Serial numbers may be specified using multiple ShipmentItemInstanceRange instances (multiples are used when ranges are not continuous) or a list of ShipmentItemInstance instances or combinations of both. The ShipmentItemInstanceRange should not be used to specify an individual serail number by using the same start and end numbers of leaving the end number blank as this can become ambiguous (an absent element can mean don't touch and an empty element can mean remove)."
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
	  ShipmentItemInstanceRange: {
      type: "TypeShipmentItemInstanceRangeType",
      wsdlDefinition: {
        name: "ShipmentItemInstanceRange",
        type: "ShipmentItemInstanceRangeType",
        "xsd:annotation": {
          "xsd:documentation": "A range of serial numbers included in a shipment item. Serial numbers may be specified using multiple ShipmentItemInstanceRange instances (multiples are used when ranges are not continuous) or a list of ShipmentItemInstance instances or combinations of both. The ShipmentItemInstanceRange should not be used to specify an individual serail number by using the same start and end numbers of leaving the end number blank as this can become ambiguous (an absent element can mean don't touch and an empty element can mean remove)."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipmentItemInstanceRange;
Modeler.register(ElementShipmentItemInstanceRange, "ElementShipmentItemInstanceRange");
