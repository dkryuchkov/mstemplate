var Modeler = require("../Modeler.js");
var className = 'ElementUltimateBeneficiaryPartyReference';

var ElementUltimateBeneficiaryPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  UltimateBeneficiaryPartyReference: {
      type: "TypeBeneficiaryPartyReferenceType",
      wsdlDefinition: {
        name: "UltimateBeneficiaryPartyReference",
        type: "BeneficiaryPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "The party that benefits from a payment transaction"
        },
        ns: "WL5G3N2",
        attribute: false
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
	  UltimateBeneficiaryPartyReference: {
      type: "TypeBeneficiaryPartyReferenceType",
      wsdlDefinition: {
        name: "UltimateBeneficiaryPartyReference",
        type: "BeneficiaryPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "The party that benefits from a payment transaction"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementUltimateBeneficiaryPartyReference;
Modeler.register(ElementUltimateBeneficiaryPartyReference, "ElementUltimateBeneficiaryPartyReference");
