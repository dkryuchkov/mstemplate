var Modeler = require("../Modeler.js");
var className = 'ElementInventoryLocationReference';

var ElementInventoryLocationReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  InventoryLocationReference: {
      type: "TypeLocationReferenceType",
      wsdlDefinition: {
        name: "InventoryLocationReference",
        type: "LocationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an inventory location. Both location and sub-location details can be identified"
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
	  InventoryLocationReference: {
      type: "TypeLocationReferenceType",
      wsdlDefinition: {
        name: "InventoryLocationReference",
        type: "LocationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an inventory location. Both location and sub-location details can be identified"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementInventoryLocationReference;
Modeler.register(ElementInventoryLocationReference, "ElementInventoryLocationReference");
