var Modeler = require("../Modeler.js");
var className = 'TypePricingAgreementReferenceType';

var TypePricingAgreementReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PricingAgreementIdentification: {
      type: "TypePricingAgreementIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PricingAgreementIdentification",
        type: "PricingAgreementIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPricingAgreementReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPricingAgreementReferenceType",
        attribute: false,
        ns: "WL5G3N2"
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
	  PricingAgreementIdentification: {
      type: "TypePricingAgreementIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PricingAgreementIdentification",
        type: "PricingAgreementIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPricingAgreementReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPricingAgreementReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePricingAgreementReferenceType;
Modeler.register(TypePricingAgreementReferenceType, "TypePricingAgreementReferenceType");
