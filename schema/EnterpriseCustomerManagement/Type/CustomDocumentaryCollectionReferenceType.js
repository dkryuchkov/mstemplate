var Modeler = require("../Modeler.js");
var className = 'TypeCustomDocumentaryCollectionReferenceType';

var TypeCustomDocumentaryCollectionReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomDocumentaryCollectionReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDocumentaryCollectionReferenceType",
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
	  CustomDocumentaryCollectionReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDocumentaryCollectionReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomDocumentaryCollectionReferenceType;
Modeler.register(TypeCustomDocumentaryCollectionReferenceType, "TypeCustomDocumentaryCollectionReferenceType");
