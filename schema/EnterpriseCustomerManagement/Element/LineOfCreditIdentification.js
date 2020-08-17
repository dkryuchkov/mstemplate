var Modeler = require("../Modeler.js");
var className = 'ElementLineOfCreditIdentification';

var ElementLineOfCreditIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LineOfCreditIdentification: {
      type: "TypeLineOfCreditIdentificationType",
      wsdlDefinition: {
        name: "LineOfCreditIdentification",
        type: "LineOfCreditIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Line of Credit object",
          "xsd:appinfo": {
            "ebocontext:BusinessContext": "BankingAndWealthManagement"
          }
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
	  LineOfCreditIdentification: {
      type: "TypeLineOfCreditIdentificationType",
      wsdlDefinition: {
        name: "LineOfCreditIdentification",
        type: "LineOfCreditIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Line of Credit object",
          "xsd:appinfo": {
            "ebocontext:BusinessContext": "BankingAndWealthManagement"
          }
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementLineOfCreditIdentification;
Modeler.register(ElementLineOfCreditIdentification, "ElementLineOfCreditIdentification");
