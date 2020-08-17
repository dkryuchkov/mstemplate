var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyOverdueCollectionRule';

var ElementCustomerPartyOverdueCollectionRule = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyOverdueCollectionRule: {
      type: "TypeCustomerPartyOverdueCollectionRuleType",
      wsdlDefinition: {
        name: "CustomerPartyOverdueCollectionRule",
        type: "CustomerPartyOverdueCollectionRuleType",
        "xsd:annotation": {
          "xsd:documentation": "This is a business reference component for the OverdueCollectionRuleReference. It represents the Overdue Collection Rule which controls how the account 's debt is compared against collection criteria to determine if an overdue process should be started and which specific overdue process is applicable to this account."
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
	  CustomerPartyOverdueCollectionRule: {
      type: "TypeCustomerPartyOverdueCollectionRuleType",
      wsdlDefinition: {
        name: "CustomerPartyOverdueCollectionRule",
        type: "CustomerPartyOverdueCollectionRuleType",
        "xsd:annotation": {
          "xsd:documentation": "This is a business reference component for the OverdueCollectionRuleReference. It represents the Overdue Collection Rule which controls how the account 's debt is compared against collection criteria to determine if an overdue process should be started and which specific overdue process is applicable to this account."
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyOverdueCollectionRule;
Modeler.register(ElementCustomerPartyOverdueCollectionRule, "ElementCustomerPartyOverdueCollectionRule");
