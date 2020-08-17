var Modeler = require("../Modeler.js");
var className = 'TypeCustomDocumentInformationType';

var TypeCustomDocumentInformationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomDocumentInformationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDocumentInformationType",
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
	  CustomDocumentInformationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomDocumentInformationType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomDocumentInformationType;
Modeler.register(TypeCustomDocumentInformationType, "TypeCustomDocumentInformationType");
