var Modeler = require("../Modeler.js");
var className = 'ElementDocumentReference';

var ElementDocumentReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DocumentReference: {
      type: "TypeDocumentReferenceType",
      wsdlDefinition: {
        name: "DocumentReference",
        type: "DocumentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Unique reference to a document, with the type of the document indicated within the content"
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
	  DocumentReference: {
      type: "TypeDocumentReferenceType",
      wsdlDefinition: {
        name: "DocumentReference",
        type: "DocumentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Unique reference to a document, with the type of the document indicated within the content"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDocumentReference;
Modeler.register(ElementDocumentReference, "ElementDocumentReference");
