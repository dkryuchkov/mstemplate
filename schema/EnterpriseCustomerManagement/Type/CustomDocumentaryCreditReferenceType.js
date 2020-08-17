var Modeler = require("../Modeler.js");
var className = 'TypeCustomDocumentaryCreditReferenceType';

var TypeCustomDocumentaryCreditReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomDocumentaryCreditReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDocumentaryCreditReferenceType",
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
	  CustomDocumentaryCreditReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDocumentaryCreditReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomDocumentaryCreditReferenceType;
Modeler.register(TypeCustomDocumentaryCreditReferenceType, "TypeCustomDocumentaryCreditReferenceType");
