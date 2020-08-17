var Modeler = require("../Modeler.js");
var className = 'ElementShipmentItemIdentification';

var ElementShipmentItemIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentItemIdentification: {
      type: "TypeShipmentItemIdentificationType",
      wsdlDefinition: {
        name: "ShipmentItemIdentification",
        type: "ShipmentItemIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Shipment Item"
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
	  ShipmentItemIdentification: {
      type: "TypeShipmentItemIdentificationType",
      wsdlDefinition: {
        name: "ShipmentItemIdentification",
        type: "ShipmentItemIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Shipment Item"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipmentItemIdentification;
Modeler.register(ElementShipmentItemIdentification, "ElementShipmentItemIdentification");
