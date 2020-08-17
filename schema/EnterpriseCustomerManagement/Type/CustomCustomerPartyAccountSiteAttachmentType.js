var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartyAccountSiteAttachmentType';

var TypeCustomCustomerPartyAccountSiteAttachmentType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPartyAccountSiteAttachmentType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyAccountSiteAttachmentType",
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
	  CustomCustomerPartyAccountSiteAttachmentType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyAccountSiteAttachmentType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartyAccountSiteAttachmentType;
Modeler.register(TypeCustomCustomerPartyAccountSiteAttachmentType, "TypeCustomCustomerPartyAccountSiteAttachmentType");
