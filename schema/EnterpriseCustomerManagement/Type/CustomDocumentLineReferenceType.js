var Modeler = require("../Modeler.js");
var className = 'TypeCustomDocumentLineReferenceType';

var TypeCustomDocumentLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomDocumentLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDocumentLineReferenceType",
        attribute: false,
        type: "xsd:string"
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
	  CustomDocumentLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDocumentLineReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomDocumentLineReferenceType;
Modeler.register(TypeCustomDocumentLineReferenceType, "TypeCustomDocumentLineReferenceType");
