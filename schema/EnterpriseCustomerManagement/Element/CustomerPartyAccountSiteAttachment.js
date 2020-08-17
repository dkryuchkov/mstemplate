var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyAccountSiteAttachment';

var ElementCustomerPartyAccountSiteAttachment = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyAccountSiteAttachment: {
      type: "TypeCustomerPartyAccountSiteAttachmentType",
      wsdlDefinition: {
        name: "CustomerPartyAccountSiteAttachment",
        type: "CustomerPartyAccountSiteAttachmentType",
        "xsd:annotation": {
          "xsd:documentation": "Attachment"
        },
        ns: "WL5G3N1",
        attribute: false
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
	  CustomerPartyAccountSiteAttachment: {
      type: "TypeCustomerPartyAccountSiteAttachmentType",
      wsdlDefinition: {
        name: "CustomerPartyAccountSiteAttachment",
        type: "CustomerPartyAccountSiteAttachmentType",
        "xsd:annotation": {
          "xsd:documentation": "Attachment"
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyAccountSiteAttachment;
Modeler.register(ElementCustomerPartyAccountSiteAttachment, "ElementCustomerPartyAccountSiteAttachment");
