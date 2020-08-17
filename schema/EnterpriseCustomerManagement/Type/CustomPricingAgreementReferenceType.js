var Modeler = require("../Modeler.js");
var className = 'TypeCustomPricingAgreementReferenceType';

var TypeCustomPricingAgreementReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPricingAgreementReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPricingAgreementReferenceType",
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
	  CustomPricingAgreementReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPricingAgreementReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPricingAgreementReferenceType;
Modeler.register(TypeCustomPricingAgreementReferenceType, "TypeCustomPricingAgreementReferenceType");
