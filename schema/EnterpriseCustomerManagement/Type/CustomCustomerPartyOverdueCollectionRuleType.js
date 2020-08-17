var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartyOverdueCollectionRuleType';

var TypeCustomCustomerPartyOverdueCollectionRuleType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPartyOverdueCollectionRuleType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyOverdueCollectionRuleType",
        attribute: false,
        type: "xsd:string"
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
	  CustomCustomerPartyOverdueCollectionRuleType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyOverdueCollectionRuleType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartyOverdueCollectionRuleType;
Modeler.register(TypeCustomCustomerPartyOverdueCollectionRuleType, "TypeCustomCustomerPartyOverdueCollectionRuleType");
