var Modeler = require("../Modeler.js");
var className = 'ElementBudgetReference';

var ElementBudgetReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BudgetReference: {
      type: "TypeBudgetReferenceType",
      wsdlDefinition: {
        name: "BudgetReference",
        type: "BudgetReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A budget specifies the total sum of money allocated for a particular purpose or period of time."
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
	  BudgetReference: {
      type: "TypeBudgetReferenceType",
      wsdlDefinition: {
        name: "BudgetReference",
        type: "BudgetReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A budget specifies the total sum of money allocated for a particular purpose or period of time."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBudgetReference;
Modeler.register(ElementBudgetReference, "ElementBudgetReference");
