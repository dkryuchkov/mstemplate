var Modeler = require("../Modeler.js");
var className = 'ElementShipmentPercentTolerance';

var ElementShipmentPercentTolerance = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentPercentTolerance: {
      type: "TypePercentToleranceType",
      wsdlDefinition: {
        name: "ShipmentPercentTolerance",
        type: "PercentToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "The percent by which the amount of shipment can vary from the ordered quantity at ship confirmation"
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
	  ShipmentPercentTolerance: {
      type: "TypePercentToleranceType",
      wsdlDefinition: {
        name: "ShipmentPercentTolerance",
        type: "PercentToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "The percent by which the amount of shipment can vary from the ordered quantity at ship confirmation"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipmentPercentTolerance;
Modeler.register(ElementShipmentPercentTolerance, "ElementShipmentPercentTolerance");
