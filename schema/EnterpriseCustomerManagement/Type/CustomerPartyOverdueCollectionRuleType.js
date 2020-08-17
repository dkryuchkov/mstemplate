var Modeler = require("../Modeler.js");
var className = 'TypeCustomerPartyOverdueCollectionRuleType';

var TypeCustomerPartyOverdueCollectionRuleType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OverdueCollectionRuleReference: {
      type: "TypeOverdueCollectionRuleReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OverdueCollectionRuleReference",
        type: "OverdueCollectionRuleReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCustomerPartyOverdueCollectionRuleType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Custom",
        type: "corecustomerpartycust:CustomCustomerPartyOverdueCollectionRuleType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    actionCode: {
      type: "TypeActionCodeType",
      wsdlDefinition: {
        name: "actionCode",
        type: "WL5G3N2:ActionCodeType",
        use: "optional",
        attribute: true
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
        minOccurs: "0",
        name: "WL5G3N2:OverdueCollectionRuleReference",
        type: "OverdueCollectionRuleReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCustomerPartyOverdueCollectionRuleType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Custom",
        type: "corecustomerpartycust:CustomCustomerPartyOverdueCollectionRuleType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    actionCode: {
      type: "TypeActionCodeType",
      wsdlDefinition: {
        name: "actionCode",
        type: "WL5G3N2:ActionCodeType",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomerPartyOverdueCollectionRuleType;
Modeler.register(TypeCustomerPartyOverdueCollectionRuleType, "TypeCustomerPartyOverdueCollectionRuleType");
