var Modeler = require("../Modeler.js");
var className = 'TypeCustomDocumentGroupReferenceType';

var TypeCustomDocumentGroupReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomDocumentGroupReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDocumentGroupReferenceType",
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
	  CustomDocumentGroupReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDocumentGroupReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomDocumentGroupReferenceType;
Modeler.register(TypeCustomDocumentGroupReferenceType, "TypeCustomDocumentGroupReferenceType");
