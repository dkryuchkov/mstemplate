var Modeler = require("../Modeler.js");
var className = 'ElementCommonItemStructureReference';

var ElementCommonItemStructureReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CommonItemStructureReference: {
      type: "TypeItemStructureReferenceType",
      wsdlDefinition: {
        name: "CommonItemStructureReference",
        type: "ItemStructureReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies an item structure that is used as a template for defining other item structures"
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
	  CommonItemStructureReference: {
      type: "TypeItemStructureReferenceType",
      wsdlDefinition: {
        name: "CommonItemStructureReference",
        type: "ItemStructureReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies an item structure that is used as a template for defining other item structures"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCommonItemStructureReference;
Modeler.register(ElementCommonItemStructureReference, "ElementCommonItemStructureReference");
