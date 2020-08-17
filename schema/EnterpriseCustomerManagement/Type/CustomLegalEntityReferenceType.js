var Modeler = require("../Modeler.js");
var className = 'TypeCustomLegalEntityReferenceType';

var TypeCustomLegalEntityReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomLegalEntityReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomLegalEntityReferenceType",
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
	  CustomLegalEntityReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomLegalEntityReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomLegalEntityReferenceType;
Modeler.register(TypeCustomLegalEntityReferenceType, "TypeCustomLegalEntityReferenceType");
