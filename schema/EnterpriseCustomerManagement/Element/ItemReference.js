var Modeler = require("../Modeler.js");
var className = 'ElementItemReference';

var ElementItemReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ItemReference: {
      type: "TypeItemReferenceType",
      wsdlDefinition: {
        name: "ItemReference",
        type: "ItemReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an item"
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
	  ItemReference: {
      type: "TypeItemReferenceType",
      wsdlDefinition: {
        name: "ItemReference",
        type: "ItemReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an item"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementItemReference;
Modeler.register(ElementItemReference, "ElementItemReference");
