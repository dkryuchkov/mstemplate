var Modeler = require("../Modeler.js");
var className = 'ElementShipmentIdentification';

var ElementShipmentIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentIdentification: {
      type: "TypeShipmentIdentificationType",
      wsdlDefinition: {
        name: "ShipmentIdentification",
        type: "ShipmentIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Shipment"
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
	  ShipmentIdentification: {
      type: "TypeShipmentIdentificationType",
      wsdlDefinition: {
        name: "ShipmentIdentification",
        type: "ShipmentIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Shipment"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipmentIdentification;
Modeler.register(ElementShipmentIdentification, "ElementShipmentIdentification");
