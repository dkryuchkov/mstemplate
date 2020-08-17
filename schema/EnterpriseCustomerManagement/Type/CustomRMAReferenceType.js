var Modeler = require("../Modeler.js");
var className = 'TypeCustomRMAReferenceType';

var TypeCustomRMAReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomRMAReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRMAReferenceType",
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
	  CustomRMAReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomRMAReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomRMAReferenceType;
Modeler.register(TypeCustomRMAReferenceType, "TypeCustomRMAReferenceType");
