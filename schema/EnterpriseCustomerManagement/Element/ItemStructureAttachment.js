var Modeler = require("../Modeler.js");
var className = 'ElementItemStructureAttachment';

var ElementItemStructureAttachment = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ItemStructureAttachment: {
      type: "TypeItemStructureAttachmentType",
      wsdlDefinition: {
        name: "ItemStructureAttachment",
        type: "ItemStructureAttachmentType",
        "xsd:annotation": {
          "xsd:documentation": "Binary, URI or other attachments that apply to the item"
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
	  ItemStructureAttachment: {
      type: "TypeItemStructureAttachmentType",
      wsdlDefinition: {
        name: "ItemStructureAttachment",
        type: "ItemStructureAttachmentType",
        "xsd:annotation": {
          "xsd:documentation": "Binary, URI or other attachments that apply to the item"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementItemStructureAttachment;
Modeler.register(ElementItemStructureAttachment, "ElementItemStructureAttachment");
