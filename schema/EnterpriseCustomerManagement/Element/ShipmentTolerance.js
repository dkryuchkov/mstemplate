var Modeler = require("../Modeler.js");
var className = 'ElementShipmentTolerance';

var ElementShipmentTolerance = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentTolerance: {
      type: "TypeShipmentToleranceType",
      wsdlDefinition: {
        name: "ShipmentTolerance",
        type: "ShipmentToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "Default Over and Under Duration Shipment Tolerance"
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
	  ShipmentTolerance: {
      type: "TypeShipmentToleranceType",
      wsdlDefinition: {
        name: "ShipmentTolerance",
        type: "ShipmentToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "Default Over and Under Duration Shipment Tolerance"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipmentTolerance;
Modeler.register(ElementShipmentTolerance, "ElementShipmentTolerance");
