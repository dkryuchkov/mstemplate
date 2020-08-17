var Modeler = require("../Modeler.js");
var className = 'ElementBeneficiaryPartyReference';

var ElementBeneficiaryPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BeneficiaryPartyReference: {
      type: "TypeBeneficiaryPartyReferenceType",
      wsdlDefinition: {
        name: "BeneficiaryPartyReference",
        type: "BeneficiaryPartyReferenceType",
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
	  BeneficiaryPartyReference: {
      type: "TypeBeneficiaryPartyReferenceType",
      wsdlDefinition: {
        name: "BeneficiaryPartyReference",
        type: "BeneficiaryPartyReferenceType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBeneficiaryPartyReference;
Modeler.register(ElementBeneficiaryPartyReference, "ElementBeneficiaryPartyReference");
