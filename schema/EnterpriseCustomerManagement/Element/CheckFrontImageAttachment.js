var Modeler = require("../Modeler.js");
var className = 'ElementCheckFrontImageAttachment';

var ElementCheckFrontImageAttachment = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CheckFrontImageAttachment: {
      type: "TypeAttachmentType",
      wsdlDefinition: {
        name: "CheckFrontImageAttachment",
        type: "AttachmentType",
        "xsd:annotation": {
          "xsd:documentation": "Image that represents the front side of a Check"
        },
        ns: "WL5G3N2",
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
	  CheckFrontImageAttachment: {
      type: "TypeAttachmentType",
      wsdlDefinition: {
        name: "CheckFrontImageAttachment",
        type: "AttachmentType",
        "xsd:annotation": {
          "xsd:documentation": "Image that represents the front side of a Check"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCheckFrontImageAttachment;
Modeler.register(ElementCheckFrontImageAttachment, "ElementCheckFrontImageAttachment");
