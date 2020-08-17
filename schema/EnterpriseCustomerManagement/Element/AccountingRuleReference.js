var Modeler = require("../Modeler.js");
var className = 'ElementAccountingRuleReference';

var ElementAccountingRuleReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AccountingRuleReference: {
      type: "TypeAccountingRuleReferenceType",
      wsdlDefinition: {
        name: "AccountingRuleReference",
        type: "AccountingRuleReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to an Accounting Rule which is used for determining the accounting period or periods in which the revenue distributions for an invoice line are recorded.. It allows for specification of the number of periods and the percentage of the total revenue to recognize in each period."
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
	  AccountingRuleReference: {
      type: "TypeAccountingRuleReferenceType",
      wsdlDefinition: {
        name: "AccountingRuleReference",
        type: "AccountingRuleReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to an Accounting Rule which is used for determining the accounting period or periods in which the revenue distributions for an invoice line are recorded.. It allows for specification of the number of periods and the percentage of the total revenue to recognize in each period."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAccountingRuleReference;
Modeler.register(ElementAccountingRuleReference, "ElementAccountingRuleReference");
