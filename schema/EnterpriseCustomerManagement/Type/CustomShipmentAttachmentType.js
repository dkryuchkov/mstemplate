var Modeler = require("../Modeler.js");
var className = 'TypeCustomShipmentAttachmentType';

var TypeCustomShipmentAttachmentType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomShipmentAttachmentType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentAttachmentType",
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
	  CustomShipmentAttachmentType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentAttachmentType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomShipmentAttachmentType;
Modeler.register(TypeCustomShipmentAttachmentType, "TypeCustomShipmentAttachmentType");
