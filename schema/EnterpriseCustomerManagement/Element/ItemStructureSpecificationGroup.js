var Modeler = require("../Modeler.js");
var className = 'ElementItemStructureSpecificationGroup';

var ElementItemStructureSpecificationGroup = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ItemStructureSpecificationGroup: {
      type: "TypeItemStructureSpecificationGroupType",
      wsdlDefinition: {
        name: "ItemStructureSpecificationGroup",
        type: "ItemStructureSpecificationGroupType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies the group of user defined attributes for the item structure"
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
	  ItemStructureSpecificationGroup: {
      type: "TypeItemStructureSpecificationGroupType",
      wsdlDefinition: {
        name: "ItemStructureSpecificationGroup",
        type: "ItemStructureSpecificationGroupType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies the group of user defined attributes for the item structure"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementItemStructureSpecificationGroup;
Modeler.register(ElementItemStructureSpecificationGroup, "ElementItemStructureSpecificationGroup");
