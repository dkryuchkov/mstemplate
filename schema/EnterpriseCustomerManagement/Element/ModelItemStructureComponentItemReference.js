var Modeler = require("../Modeler.js");
var className = 'ElementModelItemStructureComponentItemReference';

var ElementModelItemStructureComponentItemReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ModelItemStructureComponentItemReference: {
      type: "TypeItemStructureComponentItemReferenceType",
      wsdlDefinition: {
        name: "ModelItemStructureComponentItemReference",
        type: "ItemStructureComponentItemReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the component item of a model item structure"
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
	  ModelItemStructureComponentItemReference: {
      type: "TypeItemStructureComponentItemReferenceType",
      wsdlDefinition: {
        name: "ModelItemStructureComponentItemReference",
        type: "ItemStructureComponentItemReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the component item of a model item structure"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementModelItemStructureComponentItemReference;
Modeler.register(ElementModelItemStructureComponentItemReference, "ElementModelItemStructureComponentItemReference");
