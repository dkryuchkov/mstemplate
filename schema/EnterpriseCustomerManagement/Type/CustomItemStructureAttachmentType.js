var Modeler = require("../Modeler.js");
var className = 'TypeCustomItemStructureAttachmentType';

var TypeCustomItemStructureAttachmentType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomItemStructureAttachmentType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemStructureAttachmentType",
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
	  CustomItemStructureAttachmentType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomItemStructureAttachmentType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomItemStructureAttachmentType;
Modeler.register(TypeCustomItemStructureAttachmentType, "TypeCustomItemStructureAttachmentType");
