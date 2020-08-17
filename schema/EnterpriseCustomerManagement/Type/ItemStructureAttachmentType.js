var Modeler = require("../Modeler.js");
var className = 'TypeItemStructureAttachmentType';

var TypeItemStructureAttachmentType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identifier for an attachment for the item structure"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Attachment: {
      type: "TypeAttachmentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Attachment",
        type: "AttachmentType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the attachment for the item structure"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomItemStructureAttachmentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomItemStructureAttachmentType",
        attribute: false,
        ns: "WL5G3N2"
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
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identifier for an attachment for the item structure"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Attachment: {
      type: "TypeAttachmentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Attachment",
        type: "AttachmentType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the attachment for the item structure"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomItemStructureAttachmentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomItemStructureAttachmentType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeItemStructureAttachmentType;
Modeler.register(TypeItemStructureAttachmentType, "TypeItemStructureAttachmentType");
