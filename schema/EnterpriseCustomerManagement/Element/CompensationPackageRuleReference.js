var Modeler = require("../Modeler.js");
var className = 'ElementCompensationPackageRuleReference';

var ElementCompensationPackageRuleReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CompensationPackageRuleReference: {
      type: "TypeCompensationPackageRuleReferenceType",
      wsdlDefinition: {
        name: "CompensationPackageRuleReference",
        type: "CompensationPackageRuleReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Compensation Package Rule object. Compensation package rules are defined for one or more compensation components to ensure that compensation packages meet legislative requirements for remuneration, to meet company policy etc. Example: A compensation package rule that has Bonus (a component) less than or equal to 10 percent and Salary (another component) greater than or equal to 90000. Typically used in Australia"
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
	  CompensationPackageRuleReference: {
      type: "TypeCompensationPackageRuleReferenceType",
      wsdlDefinition: {
        name: "CompensationPackageRuleReference",
        type: "CompensationPackageRuleReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Compensation Package Rule object. Compensation package rules are defined for one or more compensation components to ensure that compensation packages meet legislative requirements for remuneration, to meet company policy etc. Example: A compensation package rule that has Bonus (a component) less than or equal to 10 percent and Salary (another component) greater than or equal to 90000. Typically used in Australia"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCompensationPackageRuleReference;
Modeler.register(ElementCompensationPackageRuleReference, "ElementCompensationPackageRuleReference");
