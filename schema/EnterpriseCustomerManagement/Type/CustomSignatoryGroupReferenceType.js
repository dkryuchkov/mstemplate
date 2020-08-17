var Modeler = require("../Modeler.js");
var className = 'TypeCustomSignatoryGroupReferenceType';

var TypeCustomSignatoryGroupReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomSignatoryGroupReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSignatoryGroupReferenceType",
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
	  CustomSignatoryGroupReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSignatoryGroupReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomSignatoryGroupReferenceType;
Modeler.register(TypeCustomSignatoryGroupReferenceType, "TypeCustomSignatoryGroupReferenceType");
