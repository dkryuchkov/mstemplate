var Modeler = require("../Modeler.js");
var className = 'TypeCustomBankBranchReferenceType';

var TypeCustomBankBranchReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomBankBranchReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBankBranchReferenceType",
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
	  CustomBankBranchReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBankBranchReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomBankBranchReferenceType;
Modeler.register(TypeCustomBankBranchReferenceType, "TypeCustomBankBranchReferenceType");
