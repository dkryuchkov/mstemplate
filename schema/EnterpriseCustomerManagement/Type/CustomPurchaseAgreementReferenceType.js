var Modeler = require("../Modeler.js");
var className = 'TypeCustomPurchaseAgreementReferenceType';

var TypeCustomPurchaseAgreementReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPurchaseAgreementReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPurchaseAgreementReferenceType",
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
	  CustomPurchaseAgreementReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPurchaseAgreementReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPurchaseAgreementReferenceType;
Modeler.register(TypeCustomPurchaseAgreementReferenceType, "TypeCustomPurchaseAgreementReferenceType");
