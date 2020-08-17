var Modeler = require("../Modeler.js");
var className = 'ElementItemATPRuleIdentification';

var ElementItemATPRuleIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ItemATPRuleIdentification: {
      type: "TypeItemATPRuleIdentificationType",
      wsdlDefinition: {
        name: "ItemATPRuleIdentification",
        type: "ItemATPRuleIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an item Available-To-Promise rule"
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
	  ItemATPRuleIdentification: {
      type: "TypeItemATPRuleIdentificationType",
      wsdlDefinition: {
        name: "ItemATPRuleIdentification",
        type: "ItemATPRuleIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an item Available-To-Promise rule"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementItemATPRuleIdentification;
Modeler.register(ElementItemATPRuleIdentification, "ElementItemATPRuleIdentification");
