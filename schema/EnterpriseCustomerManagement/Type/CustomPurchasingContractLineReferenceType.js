var Modeler = require("../Modeler.js");
var className = 'TypeCustomPurchasingContractLineReferenceType';

var TypeCustomPurchasingContractLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPurchasingContractLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPurchasingContractLineReferenceType",
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
	  CustomPurchasingContractLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPurchasingContractLineReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPurchasingContractLineReferenceType;
Modeler.register(TypeCustomPurchasingContractLineReferenceType, "TypeCustomPurchasingContractLineReferenceType");
