var Modeler = require("../Modeler.js");
var className = 'ElementBeneficiaryPersonParty';

var ElementBeneficiaryPersonParty = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BeneficiaryPersonParty: {
      type: "TypeBeneficiaryPersonPartyType",
      wsdlDefinition: {
        name: "BeneficiaryPersonParty",
        type: "BeneficiaryPersonPartyType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a beneficaiary which is a individual"
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
	  BeneficiaryPersonParty: {
      type: "TypeBeneficiaryPersonPartyType",
      wsdlDefinition: {
        name: "BeneficiaryPersonParty",
        type: "BeneficiaryPersonPartyType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a beneficaiary which is a individual"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBeneficiaryPersonParty;
Modeler.register(ElementBeneficiaryPersonParty, "ElementBeneficiaryPersonParty");
