var Modeler = require("../Modeler.js");
var className = 'TypeCustomJobReferenceType';

var TypeCustomJobReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomJobReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomJobReferenceType",
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
	  CustomJobReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomJobReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomJobReferenceType;
Modeler.register(TypeCustomJobReferenceType, "TypeCustomJobReferenceType");
