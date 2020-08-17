var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartyAccountAttachmentType';

var TypeCustomCustomerPartyAccountAttachmentType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPartyAccountAttachmentType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyAccountAttachmentType",
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
	  CustomCustomerPartyAccountAttachmentType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyAccountAttachmentType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartyAccountAttachmentType;
Modeler.register(TypeCustomCustomerPartyAccountAttachmentType, "TypeCustomCustomerPartyAccountAttachmentType");
