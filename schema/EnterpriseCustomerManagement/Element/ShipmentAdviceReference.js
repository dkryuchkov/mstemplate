var Modeler = require("../Modeler.js");
var className = 'ElementShipmentAdviceReference';

var ElementShipmentAdviceReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentAdviceReference: {
      type: "TypeShipmentAdviceReferenceType",
      wsdlDefinition: {
        name: "ShipmentAdviceReference",
        type: "ShipmentAdviceReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a ShipmentAdvice. ShipmentAdvice object represents information sent from the Logistics Service Provider system advising the status of a shipment sent to the Customer of a Logistics outsourcer. For example, the shipping system can send a ShipmentAdvice to an order management system notifying that the ordered items have been picked up a carrier."
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
	  ShipmentAdviceReference: {
      type: "TypeShipmentAdviceReferenceType",
      wsdlDefinition: {
        name: "ShipmentAdviceReference",
        type: "ShipmentAdviceReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a ShipmentAdvice. ShipmentAdvice object represents information sent from the Logistics Service Provider system advising the status of a shipment sent to the Customer of a Logistics outsourcer. For example, the shipping system can send a ShipmentAdvice to an order management system notifying that the ordered items have been picked up a carrier."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipmentAdviceReference;
Modeler.register(ElementShipmentAdviceReference, "ElementShipmentAdviceReference");
