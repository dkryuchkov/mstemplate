var Modeler = require("../Modeler.js");
var className = 'ElementSourceDocumentReference';

var ElementSourceDocumentReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SourceDocumentReference: {
      type: "TypeDocumentReferenceType",
      wsdlDefinition: {
        name: "SourceDocumentReference",
        type: "DocumentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a source document that originated a process or transaction"
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
	  SourceDocumentReference: {
      type: "TypeDocumentReferenceType",
      wsdlDefinition: {
        name: "SourceDocumentReference",
        type: "DocumentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a source document that originated a process or transaction"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSourceDocumentReference;
Modeler.register(ElementSourceDocumentReference, "ElementSourceDocumentReference");
