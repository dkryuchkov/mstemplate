var Modeler = require("../Modeler.js");
var className = 'TypeCustomItemStructureComponentItemReferenceType';

var TypeCustomItemStructureComponentItemReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomItemStructureComponentItemReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemStructureComponentItemReferenceType",
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
	  CustomItemStructureComponentItemReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemStructureComponentItemReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomItemStructureComponentItemReferenceType;
Modeler.register(TypeCustomItemStructureComponentItemReferenceType, "TypeCustomItemStructureComponentItemReferenceType");
