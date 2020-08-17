var Modeler = require("../Modeler.js");
var className = 'TypeCustomContractReferenceType';

var TypeCustomContractReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomContractReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomContractReferenceType",
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
	  CustomContractReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomContractReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomContractReferenceType;
Modeler.register(TypeCustomContractReferenceType, "TypeCustomContractReferenceType");
