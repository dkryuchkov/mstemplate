var Modeler = require("../Modeler.js");
var className = 'TypeCustomSourceDocumentReferenceType';

var TypeCustomSourceDocumentReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomSourceDocumentReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSourceDocumentReferenceType",
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
	  CustomSourceDocumentReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSourceDocumentReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomSourceDocumentReferenceType;
Modeler.register(TypeCustomSourceDocumentReferenceType, "TypeCustomSourceDocumentReferenceType");
