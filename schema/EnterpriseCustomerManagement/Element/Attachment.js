var Modeler = require("../Modeler.js");
var className = 'ElementAttachment';

var ElementAttachment = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Attachment: {
      type: "TypeAttachmentType",
      wsdlDefinition: {
        name: "Attachment",
        type: "AttachmentType",
        "xsd:annotation": {
          "xsd:documentation": "An attachment provides the  means to include additional infornation about a business object or component that is not part of the  the definition of the object or component. An attachment may be an embedded binary data object or a reference to a document or file located at a location that is accessible to all parties that are processing the attachment. Examples are the paper specifications and drawings attached to a business object or component to clearly communicate design requirements."
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
	  Attachment: {
      type: "TypeAttachmentType",
      wsdlDefinition: {
        name: "Attachment",
        type: "AttachmentType",
        "xsd:annotation": {
          "xsd:documentation": "An attachment provides the  means to include additional infornation about a business object or component that is not part of the  the definition of the object or component. An attachment may be an embedded binary data object or a reference to a document or file located at a location that is accessible to all parties that are processing the attachment. Examples are the paper specifications and drawings attached to a business object or component to clearly communicate design requirements."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAttachment;
Modeler.register(ElementAttachment, "ElementAttachment");
