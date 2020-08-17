var Modeler = require("../Modeler.js");
var className = 'ElementSourceDocumentLineReference';

var ElementSourceDocumentLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SourceDocumentLineReference: {
      type: "TypeDocumentLineReferenceType",
      wsdlDefinition: {
        name: "SourceDocumentLineReference",
        type: "DocumentLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a line in the source document that originated a process or transaction"
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
	  SourceDocumentLineReference: {
      type: "TypeDocumentLineReferenceType",
      wsdlDefinition: {
        name: "SourceDocumentLineReference",
        type: "DocumentLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a line in the source document that originated a process or transaction"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSourceDocumentLineReference;
Modeler.register(ElementSourceDocumentLineReference, "ElementSourceDocumentLineReference");
