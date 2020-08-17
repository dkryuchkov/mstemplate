var Modeler = require("../Modeler.js");
var className = 'TypeCustomServiceContractLineReferenceType';

var TypeCustomServiceContractLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomServiceContractLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomServiceContractLineReferenceType",
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
	  CustomServiceContractLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomServiceContractLineReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomServiceContractLineReferenceType;
Modeler.register(TypeCustomServiceContractLineReferenceType, "TypeCustomServiceContractLineReferenceType");
