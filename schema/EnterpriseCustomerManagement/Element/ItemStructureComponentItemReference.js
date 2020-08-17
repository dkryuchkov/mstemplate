var Modeler = require("../Modeler.js");
var className = 'ElementItemStructureComponentItemReference';

var ElementItemStructureComponentItemReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ItemStructureComponentItemReference: {
      type: "TypeItemStructureComponentItemReferenceType",
      wsdlDefinition: {
        name: "ItemStructureComponentItemReference",
        type: "ItemStructureComponentItemReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a component item of an item structure."
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
	  ItemStructureComponentItemReference: {
      type: "TypeItemStructureComponentItemReferenceType",
      wsdlDefinition: {
        name: "ItemStructureComponentItemReference",
        type: "ItemStructureComponentItemReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a component item of an item structure."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementItemStructureComponentItemReference;
Modeler.register(ElementItemStructureComponentItemReference, "ElementItemStructureComponentItemReference");
