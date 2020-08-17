var Modeler = require("../Modeler.js");
var className = 'ElementDocumentLineIdentification';

var ElementDocumentLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DocumentLineIdentification: {
      type: "TypeDocumentLineIdentificationType",
      wsdlDefinition: {
        name: "DocumentLineIdentification",
        type: "DocumentLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a document line"
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
	  DocumentLineIdentification: {
      type: "TypeDocumentLineIdentificationType",
      wsdlDefinition: {
        name: "DocumentLineIdentification",
        type: "DocumentLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a document line"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDocumentLineIdentification;
Modeler.register(ElementDocumentLineIdentification, "ElementDocumentLineIdentification");
