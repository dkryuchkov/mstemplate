var Modeler = require("../Modeler.js");
var className = 'TypeCustomB2BDocumentTypeType';

var TypeCustomB2BDocumentTypeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomB2BDocumentTypeType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomB2BDocumentTypeType",
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
	  CustomB2BDocumentTypeType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomB2BDocumentTypeType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomB2BDocumentTypeType;
Modeler.register(TypeCustomB2BDocumentTypeType, "TypeCustomB2BDocumentTypeType");
