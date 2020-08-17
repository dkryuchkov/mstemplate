var Modeler = require("../Modeler.js");
var className = 'ElementShipToPartyReference';

var ElementShipToPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipToPartyReference: {
      type: "TypeShipToPartyReferenceType",
      wsdlDefinition: {
        name: "ShipToPartyReference",
        type: "ShipToPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Person or Organization to whom goods are shipped. The location to which the goods are shipped (ShipToLocation)  is also defined within this context"
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
	  ShipToPartyReference: {
      type: "TypeShipToPartyReferenceType",
      wsdlDefinition: {
        name: "ShipToPartyReference",
        type: "ShipToPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Person or Organization to whom goods are shipped. The location to which the goods are shipped (ShipToLocation)  is also defined within this context"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipToPartyReference;
Modeler.register(ElementShipToPartyReference, "ElementShipToPartyReference");
