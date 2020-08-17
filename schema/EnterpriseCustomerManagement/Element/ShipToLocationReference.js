var Modeler = require("../Modeler.js");
var className = 'ElementShipToLocationReference';

var ElementShipToLocationReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipToLocationReference: {
      type: "TypeLocationReferenceType",
      wsdlDefinition: {
        name: "ShipToLocationReference",
        type: "LocationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference To a Ship To Location. A Ship To Location on a procurement identifies the location where items are to be shipped for delivery to customers. The location within a Ship To Party is also considered to be the Ship To Location"
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
	  ShipToLocationReference: {
      type: "TypeLocationReferenceType",
      wsdlDefinition: {
        name: "ShipToLocationReference",
        type: "LocationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference To a Ship To Location. A Ship To Location on a procurement identifies the location where items are to be shipped for delivery to customers. The location within a Ship To Party is also considered to be the Ship To Location"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipToLocationReference;
Modeler.register(ElementShipToLocationReference, "ElementShipToLocationReference");
