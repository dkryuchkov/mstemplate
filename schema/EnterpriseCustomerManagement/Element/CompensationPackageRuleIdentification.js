var Modeler = require("../Modeler.js");
var className = 'ElementCompensationPackageRuleIdentification';

var ElementCompensationPackageRuleIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CompensationPackageRuleIdentification: {
      type: "TypeCompensationPackageRuleIdentificationType",
      wsdlDefinition: {
        name: "CompensationPackageRuleIdentification",
        type: "CompensationPackageRuleIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Compensation Package Rule object"
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
	  CompensationPackageRuleIdentification: {
      type: "TypeCompensationPackageRuleIdentificationType",
      wsdlDefinition: {
        name: "CompensationPackageRuleIdentification",
        type: "CompensationPackageRuleIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Compensation Package Rule object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCompensationPackageRuleIdentification;
Modeler.register(ElementCompensationPackageRuleIdentification, "ElementCompensationPackageRuleIdentification");
