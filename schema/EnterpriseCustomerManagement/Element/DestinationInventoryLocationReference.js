var Modeler = require("../Modeler.js");
var className = 'ElementDestinationInventoryLocationReference';

var ElementDestinationInventoryLocationReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DestinationInventoryLocationReference: {
      type: "TypeLocationReferenceType",
      wsdlDefinition: {
        name: "DestinationInventoryLocationReference",
        type: "LocationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an inventory location that serves as the destination for received items. Both location and sub-location details can be identified"
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
	  DestinationInventoryLocationReference: {
      type: "TypeLocationReferenceType",
      wsdlDefinition: {
        name: "DestinationInventoryLocationReference",
        type: "LocationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an inventory location that serves as the destination for received items. Both location and sub-location details can be identified"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDestinationInventoryLocationReference;
Modeler.register(ElementDestinationInventoryLocationReference, "ElementDestinationInventoryLocationReference");
