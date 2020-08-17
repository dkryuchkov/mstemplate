var Modeler = require("../Modeler.js");
var className = 'TypeCustomItemStructureType';

var TypeCustomItemStructureType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomItemStructureType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemStructureType",
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
	  CustomItemStructureType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemStructureType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomItemStructureType;
Modeler.register(TypeCustomItemStructureType, "TypeCustomItemStructureType");
