var Modeler = require("../Modeler.js");
var className = 'ElementSourceInventoryLocationReference';

var ElementSourceInventoryLocationReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SourceInventoryLocationReference: {
      type: "TypeLocationReferenceType",
      wsdlDefinition: {
        name: "SourceInventoryLocationReference",
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
	  SourceInventoryLocationReference: {
      type: "TypeLocationReferenceType",
      wsdlDefinition: {
        name: "SourceInventoryLocationReference",
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

module.exports = ElementSourceInventoryLocationReference;
Modeler.register(ElementSourceInventoryLocationReference, "ElementSourceInventoryLocationReference");
