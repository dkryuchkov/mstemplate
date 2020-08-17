var Modeler = require("../Modeler.js");
var className = 'TypeCustomClassificationReferenceType';

var TypeCustomClassificationReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomClassificationReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomClassificationReferenceType",
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
	  CustomClassificationReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomClassificationReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomClassificationReferenceType;
Modeler.register(TypeCustomClassificationReferenceType, "TypeCustomClassificationReferenceType");
