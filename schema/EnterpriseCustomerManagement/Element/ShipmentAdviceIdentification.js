var Modeler = require("../Modeler.js");
var className = 'ElementShipmentAdviceIdentification';

var ElementShipmentAdviceIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentAdviceIdentification: {
      type: "TypeShipmentAdviceIdentificationType",
      wsdlDefinition: {
        name: "ShipmentAdviceIdentification",
        type: "ShipmentAdviceIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a ShipmentAdvice."
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
	  ShipmentAdviceIdentification: {
      type: "TypeShipmentAdviceIdentificationType",
      wsdlDefinition: {
        name: "ShipmentAdviceIdentification",
        type: "ShipmentAdviceIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a ShipmentAdvice."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipmentAdviceIdentification;
Modeler.register(ElementShipmentAdviceIdentification, "ElementShipmentAdviceIdentification");
