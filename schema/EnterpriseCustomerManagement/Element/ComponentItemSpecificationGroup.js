var Modeler = require("../Modeler.js");
var className = 'ElementComponentItemSpecificationGroup';

var ElementComponentItemSpecificationGroup = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ComponentItemSpecificationGroup: {
      type: "TypeComponentItemSpecificationGroupType",
      wsdlDefinition: {
        name: "ComponentItemSpecificationGroup",
        type: "ComponentItemSpecificationGroupType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies the group of user defined attributes for the component item"
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
	  ComponentItemSpecificationGroup: {
      type: "TypeComponentItemSpecificationGroupType",
      wsdlDefinition: {
        name: "ComponentItemSpecificationGroup",
        type: "ComponentItemSpecificationGroupType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies the group of user defined attributes for the component item"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementComponentItemSpecificationGroup;
Modeler.register(ElementComponentItemSpecificationGroup, "ElementComponentItemSpecificationGroup");
