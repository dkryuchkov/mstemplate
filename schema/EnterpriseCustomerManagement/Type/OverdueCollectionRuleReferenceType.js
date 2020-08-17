var Modeler = require("../Modeler.js");
var className = 'TypeOverdueCollectionRuleReferenceType';

var TypeOverdueCollectionRuleReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OverdueCollectionRuleIdentification: {
      type: "TypeOverdueCollectionRuleIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OverdueCollectionRuleIdentification",
        type: "OverdueCollectionRuleIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
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
        minOccurs: "0",
        name: "WL5G3N2:OverdueCollectionRuleIdentification",
        type: "OverdueCollectionRuleIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeOverdueCollectionRuleReferenceType;
Modeler.register(TypeOverdueCollectionRuleReferenceType, "TypeOverdueCollectionRuleReferenceType");
