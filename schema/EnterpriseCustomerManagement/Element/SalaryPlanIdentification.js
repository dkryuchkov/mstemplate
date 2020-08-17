var Modeler = require("../Modeler.js");
var className = 'ElementSalaryPlanIdentification';

var ElementSalaryPlanIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SalaryPlanIdentification: {
      type: "TypeSalaryPlanIdentificationType",
      wsdlDefinition: {
        name: "SalaryPlanIdentification",
        type: "SalaryPlanIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of Salary Plan"
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
	  SalaryPlanIdentification: {
      type: "TypeSalaryPlanIdentificationType",
      wsdlDefinition: {
        name: "SalaryPlanIdentification",
        type: "SalaryPlanIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of Salary Plan"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSalaryPlanIdentification;
Modeler.register(ElementSalaryPlanIdentification, "ElementSalaryPlanIdentification");
