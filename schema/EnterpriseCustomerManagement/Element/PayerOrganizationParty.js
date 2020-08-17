var Modeler = require("../Modeler.js");
var className = 'ElementPayerOrganizationParty';

var ElementPayerOrganizationParty = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PayerOrganizationParty: {
      type: "TypePayerOrganizationPartyType",
      wsdlDefinition: {
        name: "PayerOrganizationParty",
        type: "PayerOrganizationPartyType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to an payer which is an organization"
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
	  PayerOrganizationParty: {
      type: "TypePayerOrganizationPartyType",
      wsdlDefinition: {
        name: "PayerOrganizationParty",
        type: "PayerOrganizationPartyType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to an payer which is an organization"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPayerOrganizationParty;
Modeler.register(ElementPayerOrganizationParty, "ElementPayerOrganizationParty");
