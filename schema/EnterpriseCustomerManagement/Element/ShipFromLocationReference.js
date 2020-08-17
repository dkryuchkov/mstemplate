var Modeler = require("../Modeler.js");
var className = 'ElementShipFromLocationReference';

var ElementShipFromLocationReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipFromLocationReference: {
      type: "TypeLocationReferenceType",
      wsdlDefinition: {
        name: "ShipFromLocationReference",
        type: "LocationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference To a Ship From Location. A Ship From Location on a procurement identifies the location from where items are to be shipped for delivery to customers. The location within a Ship From Party is also considered to be the Ship From Location. It is typically an inventory location."
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
	  ShipFromLocationReference: {
      type: "TypeLocationReferenceType",
      wsdlDefinition: {
        name: "ShipFromLocationReference",
        type: "LocationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference To a Ship From Location. A Ship From Location on a procurement identifies the location from where items are to be shipped for delivery to customers. The location within a Ship From Party is also considered to be the Ship From Location. It is typically an inventory location."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipFromLocationReference;
Modeler.register(ElementShipFromLocationReference, "ElementShipFromLocationReference");
