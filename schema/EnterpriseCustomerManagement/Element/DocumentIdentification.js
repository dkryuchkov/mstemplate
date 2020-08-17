var Modeler = require("../Modeler.js");
var className = 'ElementDocumentIdentification';

var ElementDocumentIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DocumentIdentification: {
      type: "TypeDocumentIdentificationType",
      wsdlDefinition: {
        name: "DocumentIdentification",
        type: "DocumentIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a document"
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
	  DocumentIdentification: {
      type: "TypeDocumentIdentificationType",
      wsdlDefinition: {
        name: "DocumentIdentification",
        type: "DocumentIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a document"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDocumentIdentification;
Modeler.register(ElementDocumentIdentification, "ElementDocumentIdentification");
