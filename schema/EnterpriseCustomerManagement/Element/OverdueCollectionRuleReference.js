var Modeler = require("../Modeler.js");
var className = 'ElementOverdueCollectionRuleReference';

var ElementOverdueCollectionRuleReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OverdueCollectionRuleReference: {
      type: "TypeOverdueCollectionRuleReferenceType",
      wsdlDefinition: {
        name: "OverdueCollectionRuleReference",
        type: "OverdueCollectionRuleReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to an Overdue Collecton Rule object. Overdue Collection Rule controls how the account's debt is compared against collection criteria to determine if an overdue process should be started and which specific overdue process is applicable to this account."
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
	  OverdueCollectionRuleReference: {
      type: "TypeOverdueCollectionRuleReferenceType",
      wsdlDefinition: {
        name: "OverdueCollectionRuleReference",
        type: "OverdueCollectionRuleReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to an Overdue Collecton Rule object. Overdue Collection Rule controls how the account's debt is compared against collection criteria to determine if an overdue process should be started and which specific overdue process is applicable to this account."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOverdueCollectionRuleReference;
Modeler.register(ElementOverdueCollectionRuleReference, "ElementOverdueCollectionRuleReference");
