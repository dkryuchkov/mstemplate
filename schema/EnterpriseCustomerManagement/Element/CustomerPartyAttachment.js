var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyAttachment';

var ElementCustomerPartyAttachment = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyAttachment: {
      type: "TypeCustomerPartyAttachmentType",
      wsdlDefinition: {
        name: "CustomerPartyAttachment",
        type: "CustomerPartyAttachmentType",
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
	  CustomerPartyAttachment: {
      type: "TypeCustomerPartyAttachmentType",
      wsdlDefinition: {
        name: "CustomerPartyAttachment",
        type: "CustomerPartyAttachmentType",
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

module.exports = ElementCustomerPartyAttachment;
Modeler.register(ElementCustomerPartyAttachment, "ElementCustomerPartyAttachment");
