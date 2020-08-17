var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyTaxExemption';

var ElementCustomerPartyTaxExemption = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyTaxExemption: {
      type: "TypeCustomerPartyTaxExemptionType",
      wsdlDefinition: {
        name: "CustomerPartyTaxExemption",
        type: "CustomerPartyTaxExemptionType",
        "xsd:annotation": {
          "xsd:documentation": "Tax Exemptions that this Customer Party is eligible for."
        },
        ns: "WL5G3N1",
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
	  CustomerPartyTaxExemption: {
      type: "TypeCustomerPartyTaxExemptionType",
      wsdlDefinition: {
        name: "CustomerPartyTaxExemption",
        type: "CustomerPartyTaxExemptionType",
        "xsd:annotation": {
          "xsd:documentation": "Tax Exemptions that this Customer Party is eligible for."
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyTaxExemption;
Modeler.register(ElementCustomerPartyTaxExemption, "ElementCustomerPartyTaxExemption");
