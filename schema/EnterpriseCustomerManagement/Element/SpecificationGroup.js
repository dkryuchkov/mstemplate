var Modeler = require("../Modeler.js");
var className = 'ElementSpecificationGroup';

var ElementSpecificationGroup = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SpecificationGroup: {
      type: "TypeSpecificationGroupType",
      wsdlDefinition: {
        name: "SpecificationGroup",
        type: "SpecificationGroupType",
        "xsd:annotation": {
          "xsd:documentation": "A container for a set of specifications that can be used to describe an object in more detail. For example, a Specification Group called Display Specifications can be created to list all the specifications of an item that need to be displayed on a catalog, with each specifiication having a name and a value"
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
	  SpecificationGroup: {
      type: "TypeSpecificationGroupType",
      wsdlDefinition: {
        name: "SpecificationGroup",
        type: "SpecificationGroupType",
        "xsd:annotation": {
          "xsd:documentation": "A container for a set of specifications that can be used to describe an object in more detail. For example, a Specification Group called Display Specifications can be created to list all the specifications of an item that need to be displayed on a catalog, with each specifiication having a name and a value"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSpecificationGroup;
Modeler.register(ElementSpecificationGroup, "ElementSpecificationGroup");
