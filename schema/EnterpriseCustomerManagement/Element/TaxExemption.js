var Modeler = require("../Modeler.js");
var className = 'ElementTaxExemption';

var ElementTaxExemption = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TaxExemption: {
      type: "TypeTaxExemptionType",
      wsdlDefinition: {
        name: "TaxExemption",
        type: "TaxExemptionType",
        "xsd:annotation": {
          "xsd:documentation": "Details about any exemption applicable for a tax payment"
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
	  TaxExemption: {
      type: "TypeTaxExemptionType",
      wsdlDefinition: {
        name: "TaxExemption",
        type: "TaxExemptionType",
        "xsd:annotation": {
          "xsd:documentation": "Details about any exemption applicable for a tax payment"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTaxExemption;
Modeler.register(ElementTaxExemption, "ElementTaxExemption");
