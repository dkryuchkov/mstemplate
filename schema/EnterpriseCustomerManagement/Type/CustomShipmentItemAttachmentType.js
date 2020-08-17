var Modeler = require("../Modeler.js");
var className = 'TypeCustomShipmentItemAttachmentType';

var TypeCustomShipmentItemAttachmentType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomShipmentItemAttachmentType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentItemAttachmentType",
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
	  CustomShipmentItemAttachmentType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomShipmentItemAttachmentType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomShipmentItemAttachmentType;
Modeler.register(TypeCustomShipmentItemAttachmentType, "TypeCustomShipmentItemAttachmentType");
