var Modeler = require("../Modeler.js");
var className = 'TypeDocumentScheduleReferenceType';

var TypeDocumentScheduleReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DocumentIdentification: {
      type: "TypeDocumentIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DocumentIdentification",
        type: "DocumentIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DocumentLineIdentification: {
      type: "TypeDocumentLineIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DocumentLineIdentification",
        type: "DocumentLineIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DocumentScheduleIdentification: {
      type: "TypeDocumentScheduleIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DocumentScheduleIdentification",
        type: "DocumentScheduleIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreationDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CreationDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Date and Time at which the first version of the document was created"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LastUpdateDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LastUpdateDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Date and time at which the document was last modified. Note that LastUpdateDateTime and the revision date time (DocumentIdentification/Revision/EffectiveDate) may not be the same as a document can be updated without making a new revision."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomDocumentScheduleReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomDocumentScheduleReferenceType",
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
	  DocumentIdentification: {
      type: "TypeDocumentIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DocumentIdentification",
        type: "DocumentIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DocumentLineIdentification: {
      type: "TypeDocumentLineIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DocumentLineIdentification",
        type: "DocumentLineIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DocumentScheduleIdentification: {
      type: "TypeDocumentScheduleIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DocumentScheduleIdentification",
        type: "DocumentScheduleIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreationDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CreationDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Date and Time at which the first version of the document was created"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LastUpdateDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LastUpdateDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Date and time at which the document was last modified. Note that LastUpdateDateTime and the revision date time (DocumentIdentification/Revision/EffectiveDate) may not be the same as a document can be updated without making a new revision."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomDocumentScheduleReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomDocumentScheduleReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDocumentScheduleReferenceType;
Modeler.register(TypeDocumentScheduleReferenceType, "TypeDocumentScheduleReferenceType");
