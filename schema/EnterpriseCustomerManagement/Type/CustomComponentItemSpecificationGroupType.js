var Modeler = require("../Modeler.js");
var className = 'TypeCustomComponentItemSpecificationGroupType';

var TypeCustomComponentItemSpecificationGroupType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomComponentItemSpecificationGroupType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomComponentItemSpecificationGroupType",
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
	  CustomComponentItemSpecificationGroupType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomComponentItemSpecificationGroupType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomComponentItemSpecificationGroupType;
Modeler.register(TypeCustomComponentItemSpecificationGroupType, "TypeCustomComponentItemSpecificationGroupType");
