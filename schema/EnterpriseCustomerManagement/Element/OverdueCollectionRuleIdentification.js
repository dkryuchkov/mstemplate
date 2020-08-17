var Modeler = require("../Modeler.js");
var className = 'ElementOverdueCollectionRuleIdentification';

var ElementOverdueCollectionRuleIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OverdueCollectionRuleIdentification: {
      type: "TypeOverdueCollectionRuleIdentificationType",
      wsdlDefinition: {
        name: "OverdueCollectionRuleIdentification",
        type: "OverdueCollectionRuleIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "A unique identification of an Overdue Collection Rule object"
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
	  OverdueCollectionRuleIdentification: {
      type: "TypeOverdueCollectionRuleIdentificationType",
      wsdlDefinition: {
        name: "OverdueCollectionRuleIdentification",
        type: "OverdueCollectionRuleIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "A unique identification of an Overdue Collection Rule object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOverdueCollectionRuleIdentification;
Modeler.register(ElementOverdueCollectionRuleIdentification, "ElementOverdueCollectionRuleIdentification");
