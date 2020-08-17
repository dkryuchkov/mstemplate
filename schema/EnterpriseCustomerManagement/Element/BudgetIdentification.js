var Modeler = require("../Modeler.js");
var className = 'ElementBudgetIdentification';

var ElementBudgetIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BudgetIdentification: {
      type: "TypeBudgetIdentificationType",
      wsdlDefinition: {
        name: "BudgetIdentification",
        type: "BudgetIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Budget"
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
	  BudgetIdentification: {
      type: "TypeBudgetIdentificationType",
      wsdlDefinition: {
        name: "BudgetIdentification",
        type: "BudgetIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Budget"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBudgetIdentification;
Modeler.register(ElementBudgetIdentification, "ElementBudgetIdentification");
