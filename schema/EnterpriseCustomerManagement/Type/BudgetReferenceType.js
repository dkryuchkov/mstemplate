var Modeler = require("../Modeler.js");
var className = 'TypeBudgetReferenceType';

var TypeBudgetReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BudgetIdentification: {
      type: "TypeBudgetIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BudgetIdentification",
        type: "BudgetIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomBudgetReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomBudgetReferenceType",
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
	  BudgetIdentification: {
      type: "TypeBudgetIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BudgetIdentification",
        type: "BudgetIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomBudgetReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomBudgetReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeBudgetReferenceType;
Modeler.register(TypeBudgetReferenceType, "TypeBudgetReferenceType");
