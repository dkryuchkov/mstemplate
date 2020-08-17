var Modeler = require("../Modeler.js");
var className = 'ElementOriginalItemReference';

var ElementOriginalItemReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OriginalItemReference: {
      type: "TypeItemReferenceType",
      wsdlDefinition: {
        name: "OriginalItemReference",
        type: "ItemReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the original item that has been substituted by another in manufacturing."
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
	  OriginalItemReference: {
      type: "TypeItemReferenceType",
      wsdlDefinition: {
        name: "OriginalItemReference",
        type: "ItemReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the original item that has been substituted by another in manufacturing."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOriginalItemReference;
Modeler.register(ElementOriginalItemReference, "ElementOriginalItemReference");
