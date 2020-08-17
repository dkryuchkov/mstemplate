var Modeler = require("../Modeler.js");
var className = 'TypeCustomClaimReferenceType';

var TypeCustomClaimReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomClaimReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomClaimReferenceType",
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
	  CustomClaimReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomClaimReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomClaimReferenceType;
Modeler.register(TypeCustomClaimReferenceType, "TypeCustomClaimReferenceType");
