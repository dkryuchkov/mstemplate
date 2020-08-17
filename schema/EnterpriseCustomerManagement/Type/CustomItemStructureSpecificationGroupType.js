var Modeler = require("../Modeler.js");
var className = 'TypeCustomItemStructureSpecificationGroupType';

var TypeCustomItemStructureSpecificationGroupType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomItemStructureSpecificationGroupType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemStructureSpecificationGroupType",
        attribute: false,
        type: "xsd:string"
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
	  CustomItemStructureSpecificationGroupType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemStructureSpecificationGroupType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomItemStructureSpecificationGroupType;
Modeler.register(TypeCustomItemStructureSpecificationGroupType, "TypeCustomItemStructureSpecificationGroupType");
