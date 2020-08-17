var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartyAttachmentType';

var TypeCustomCustomerPartyAttachmentType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPartyAttachmentType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyAttachmentType",
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
	  CustomCustomerPartyAttachmentType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyAttachmentType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartyAttachmentType;
Modeler.register(TypeCustomCustomerPartyAttachmentType, "TypeCustomCustomerPartyAttachmentType");
