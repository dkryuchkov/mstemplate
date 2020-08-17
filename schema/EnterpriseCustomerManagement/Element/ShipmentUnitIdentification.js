var Modeler = require("../Modeler.js");
var className = 'ElementShipmentUnitIdentification';

var ElementShipmentUnitIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentUnitIdentification: {
      type: "TypeShipmentUnitIdentificationType",
      wsdlDefinition: {
        name: "ShipmentUnitIdentification",
        type: "ShipmentUnitIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Shipment Unit"
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
	  ShipmentUnitIdentification: {
      type: "TypeShipmentUnitIdentificationType",
      wsdlDefinition: {
        name: "ShipmentUnitIdentification",
        type: "ShipmentUnitIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Shipment Unit"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipmentUnitIdentification;
Modeler.register(ElementShipmentUnitIdentification, "ElementShipmentUnitIdentification");
