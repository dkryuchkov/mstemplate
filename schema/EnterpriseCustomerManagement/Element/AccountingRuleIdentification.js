var Modeler = require("../Modeler.js");
var className = 'ElementAccountingRuleIdentification';

var ElementAccountingRuleIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AccountingRuleIdentification: {
      type: "TypeAccountingRuleIdentificationType",
      wsdlDefinition: {
        name: "AccountingRuleIdentification",
        type: "AccountingRuleIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Accounting Rule"
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
	  AccountingRuleIdentification: {
      type: "TypeAccountingRuleIdentificationType",
      wsdlDefinition: {
        name: "AccountingRuleIdentification",
        type: "AccountingRuleIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Accounting Rule"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAccountingRuleIdentification;
Modeler.register(ElementAccountingRuleIdentification, "ElementAccountingRuleIdentification");
