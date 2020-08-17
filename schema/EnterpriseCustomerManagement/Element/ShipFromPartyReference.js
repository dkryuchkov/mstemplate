var Modeler = require("../Modeler.js");
var className = 'ElementShipFromPartyReference';

var ElementShipFromPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipFromPartyReference: {
      type: "TypeShipFromPartyReferenceType",
      wsdlDefinition: {
        name: "ShipFromPartyReference",
        type: "ShipFromPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Person or Organization that ships out goods that have been ordered by customers. The location from where the goods are shipped (ShipFromLocation)  is also defined within this context"
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
	  ShipFromPartyReference: {
      type: "TypeShipFromPartyReferenceType",
      wsdlDefinition: {
        name: "ShipFromPartyReference",
        type: "ShipFromPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Person or Organization that ships out goods that have been ordered by customers. The location from where the goods are shipped (ShipFromLocation)  is also defined within this context"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipFromPartyReference;
Modeler.register(ElementShipFromPartyReference, "ElementShipFromPartyReference");
