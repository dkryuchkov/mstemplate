var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyAccountAttachment';

var ElementCustomerPartyAccountAttachment = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyAccountAttachment: {
      type: "TypeCustomerPartyAccountAttachmentType",
      wsdlDefinition: {
        name: "CustomerPartyAccountAttachment",
        type: "CustomerPartyAccountAttachmentType",
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
	  CustomerPartyAccountAttachment: {
      type: "TypeCustomerPartyAccountAttachmentType",
      wsdlDefinition: {
        name: "CustomerPartyAccountAttachment",
        type: "CustomerPartyAccountAttachmentType",
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

module.exports = ElementCustomerPartyAccountAttachment;
Modeler.register(ElementCustomerPartyAccountAttachment, "ElementCustomerPartyAccountAttachment");
