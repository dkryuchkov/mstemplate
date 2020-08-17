var Modeler = require("../Modeler.js");
var className = 'ElementTax';

var ElementTax = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Tax: {
      type: "TypeTaxType",
      wsdlDefinition: {
        name: "Tax",
        type: "TaxType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the a specific Tax amount including the Tax Code, Type, Jurisdiction and other information. Used in documents to indicate a Payable/ Paid/ Estimated Tax amount"
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
	  Tax: {
      type: "TypeTaxType",
      wsdlDefinition: {
        name: "Tax",
        type: "TaxType",
        "xsd:annotation": {
          "xsd:documentation": "Details about the a specific Tax amount including the Tax Code, Type, Jurisdiction and other information. Used in documents to indicate a Payable/ Paid/ Estimated Tax amount"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTax;
Modeler.register(ElementTax, "ElementTax");
