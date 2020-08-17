var Modeler = require("../Modeler.js");
var className = 'ElementCheckBackImageAttachment';

var ElementCheckBackImageAttachment = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CheckBackImageAttachment: {
      type: "TypeAttachmentType",
      wsdlDefinition: {
        name: "CheckBackImageAttachment",
        type: "AttachmentType",
        "xsd:annotation": {
          "xsd:documentation": "Image that represents the back side of a Check"
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
	  CheckBackImageAttachment: {
      type: "TypeAttachmentType",
      wsdlDefinition: {
        name: "CheckBackImageAttachment",
        type: "AttachmentType",
        "xsd:annotation": {
          "xsd:documentation": "Image that represents the back side of a Check"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCheckBackImageAttachment;
Modeler.register(ElementCheckBackImageAttachment, "ElementCheckBackImageAttachment");
