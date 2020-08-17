var Modeler = require("../Modeler.js");
var className = 'ElementFinancialAccountIdentification';

var ElementFinancialAccountIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FinancialAccountIdentification: {
      type: "TypeFinancialAccountIdentificationType",
      wsdlDefinition: {
        name: "FinancialAccountIdentification",
        type: "FinancialAccountIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Financial Account"
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
	  FinancialAccountIdentification: {
      type: "TypeFinancialAccountIdentificationType",
      wsdlDefinition: {
        name: "FinancialAccountIdentification",
        type: "FinancialAccountIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Financial Account"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFinancialAccountIdentification;
Modeler.register(ElementFinancialAccountIdentification, "ElementFinancialAccountIdentification");
