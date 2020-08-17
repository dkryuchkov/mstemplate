var Modeler = require("../Modeler.js");
var className = 'TypeCustomPurchaseAgreementPriceBreakReferenceType';

var TypeCustomPurchaseAgreementPriceBreakReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPurchaseAgreementPriceBreakReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPurchaseAgreementPriceBreakReferenceType",
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
	  CustomPurchaseAgreementPriceBreakReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPurchaseAgreementPriceBreakReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPurchaseAgreementPriceBreakReferenceType;
Modeler.register(TypeCustomPurchaseAgreementPriceBreakReferenceType, "TypeCustomPurchaseAgreementPriceBreakReferenceType");
