var Modeler = require("../Modeler.js");
var className = 'TypeCustomDocumentReferenceType';

var TypeCustomDocumentReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomDocumentReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDocumentReferenceType",
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
	  CustomDocumentReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDocumentReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomDocumentReferenceType;
Modeler.register(TypeCustomDocumentReferenceType, "TypeCustomDocumentReferenceType");
