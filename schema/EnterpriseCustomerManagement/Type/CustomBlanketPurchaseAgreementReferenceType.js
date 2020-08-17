var Modeler = require("../Modeler.js");
var className = 'TypeCustomBlanketPurchaseAgreementReferenceType';

var TypeCustomBlanketPurchaseAgreementReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomBlanketPurchaseAgreementReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBlanketPurchaseAgreementReferenceType",
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
	  CustomBlanketPurchaseAgreementReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomBlanketPurchaseAgreementReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomBlanketPurchaseAgreementReferenceType;
Modeler.register(TypeCustomBlanketPurchaseAgreementReferenceType, "TypeCustomBlanketPurchaseAgreementReferenceType");
