var Modeler = require("../Modeler.js");
var className = 'TypeCustomItemStructureReferenceType';

var TypeCustomItemStructureReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomItemStructureReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemStructureReferenceType",
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
	  CustomItemStructureReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemStructureReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomItemStructureReferenceType;
Modeler.register(TypeCustomItemStructureReferenceType, "TypeCustomItemStructureReferenceType");
