var Modeler = require("../Modeler.js");
var className = 'ElementDocumentLineReference';

var ElementDocumentLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DocumentLineReference: {
      type: "TypeDocumentLineReferenceType",
      wsdlDefinition: {
        name: "DocumentLineReference",
        type: "DocumentLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Unique reference to a document line"
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
	  DocumentLineReference: {
      type: "TypeDocumentLineReferenceType",
      wsdlDefinition: {
        name: "DocumentLineReference",
        type: "DocumentLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Unique reference to a document line"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDocumentLineReference;
Modeler.register(ElementDocumentLineReference, "ElementDocumentLineReference");
