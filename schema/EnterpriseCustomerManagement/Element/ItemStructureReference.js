var Modeler = require("../Modeler.js");
var className = 'ElementItemStructureReference';

var ElementItemStructureReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ItemStructureReference: {
      type: "TypeItemStructureReferenceType",
      wsdlDefinition: {
        name: "ItemStructureReference",
        type: "ItemStructureReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an item structure"
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
	  ItemStructureReference: {
      type: "TypeItemStructureReferenceType",
      wsdlDefinition: {
        name: "ItemStructureReference",
        type: "ItemStructureReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an item structure"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementItemStructureReference;
Modeler.register(ElementItemStructureReference, "ElementItemStructureReference");
