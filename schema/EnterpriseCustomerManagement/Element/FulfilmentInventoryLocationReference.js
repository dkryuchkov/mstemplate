var Modeler = require("../Modeler.js");
var className = 'ElementFulfilmentInventoryLocationReference';

var ElementFulfilmentInventoryLocationReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FulfilmentInventoryLocationReference: {
      type: "TypeLocationReferenceType",
      wsdlDefinition: {
        name: "FulfilmentInventoryLocationReference",
        type: "LocationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "need to update if inventorylocation is a type"
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
	  FulfilmentInventoryLocationReference: {
      type: "TypeLocationReferenceType",
      wsdlDefinition: {
        name: "FulfilmentInventoryLocationReference",
        type: "LocationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "need to update if inventorylocation is a type"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFulfilmentInventoryLocationReference;
Modeler.register(ElementFulfilmentInventoryLocationReference, "ElementFulfilmentInventoryLocationReference");
