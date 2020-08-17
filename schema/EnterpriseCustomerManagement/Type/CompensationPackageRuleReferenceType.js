var Modeler = require("../Modeler.js");
var className = 'TypeCompensationPackageRuleReferenceType';

var TypeCompensationPackageRuleReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CompensationPackageRuleIdentification: {
      type: "TypeCompensationPackageRuleIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CompensationPackageRuleIdentification",
        type: "CompensationPackageRuleIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCompensationPackageRuleReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomCompensationPackageRuleReferenceType",
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
	  CompensationPackageRuleIdentification: {
      type: "TypeCompensationPackageRuleIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CompensationPackageRuleIdentification",
        type: "CompensationPackageRuleIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCompensationPackageRuleReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomCompensationPackageRuleReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCompensationPackageRuleReferenceType;
Modeler.register(TypeCompensationPackageRuleReferenceType, "TypeCompensationPackageRuleReferenceType");
