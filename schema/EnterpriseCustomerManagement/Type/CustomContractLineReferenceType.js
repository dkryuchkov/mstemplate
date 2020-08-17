var Modeler = require("../Modeler.js");
var className = 'TypeCustomContractLineReferenceType';

var TypeCustomContractLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomContractLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomContractLineReferenceType",
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
	  CustomContractLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomContractLineReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomContractLineReferenceType;
Modeler.register(TypeCustomContractLineReferenceType, "TypeCustomContractLineReferenceType");
