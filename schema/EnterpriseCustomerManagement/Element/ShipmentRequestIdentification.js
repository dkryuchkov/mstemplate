var Modeler = require("../Modeler.js");
var className = 'ElementShipmentRequestIdentification';

var ElementShipmentRequestIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentRequestIdentification: {
      type: "TypeShipmentRequestIdentificationType",
      wsdlDefinition: {
        name: "ShipmentRequestIdentification",
        type: "ShipmentRequestIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Shipment Request object"
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
	  ShipmentRequestIdentification: {
      type: "TypeShipmentRequestIdentificationType",
      wsdlDefinition: {
        name: "ShipmentRequestIdentification",
        type: "ShipmentRequestIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Shipment Request object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipmentRequestIdentification;
Modeler.register(ElementShipmentRequestIdentification, "ElementShipmentRequestIdentification");
