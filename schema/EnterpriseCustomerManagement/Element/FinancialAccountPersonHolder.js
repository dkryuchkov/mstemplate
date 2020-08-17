var Modeler = require("../Modeler.js");
var className = 'ElementFinancialAccountPersonHolder';

var ElementFinancialAccountPersonHolder = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FinancialAccountPersonHolder: {
      type: "TypeFinancialAccountPersonHolderType",
      wsdlDefinition: {
        name: "FinancialAccountPersonHolder",
        type: "FinancialAccountPersonHolderType",
        "xsd:annotation": {
          "xsd:documentation": "An individual financial account holder"
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
	  FinancialAccountPersonHolder: {
      type: "TypeFinancialAccountPersonHolderType",
      wsdlDefinition: {
        name: "FinancialAccountPersonHolder",
        type: "FinancialAccountPersonHolderType",
        "xsd:annotation": {
          "xsd:documentation": "An individual financial account holder"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFinancialAccountPersonHolder;
Modeler.register(ElementFinancialAccountPersonHolder, "ElementFinancialAccountPersonHolder");
