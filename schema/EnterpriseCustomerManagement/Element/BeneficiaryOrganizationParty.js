var Modeler = require("../Modeler.js");
var className = 'ElementBeneficiaryOrganizationParty';

var ElementBeneficiaryOrganizationParty = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BeneficiaryOrganizationParty: {
      type: "TypeBeneficiaryOrganizationPartyType",
      wsdlDefinition: {
        name: "BeneficiaryOrganizationParty",
        type: "BeneficiaryOrganizationPartyType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a beneficaiary which is an organization"
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
	  BeneficiaryOrganizationParty: {
      type: "TypeBeneficiaryOrganizationPartyType",
      wsdlDefinition: {
        name: "BeneficiaryOrganizationParty",
        type: "BeneficiaryOrganizationPartyType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a beneficaiary which is an organization"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBeneficiaryOrganizationParty;
Modeler.register(ElementBeneficiaryOrganizationParty, "ElementBeneficiaryOrganizationParty");
