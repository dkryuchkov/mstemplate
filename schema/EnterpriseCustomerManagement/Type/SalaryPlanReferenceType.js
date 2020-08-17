var Modeler = require("../Modeler.js");
var className = 'TypeSalaryPlanReferenceType';

var TypeSalaryPlanReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SalaryPlanIdentification: {
      type: "TypeSalaryPlanIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SalaryPlanIdentification",
        type: "SalaryPlanIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomSalaryPlanReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomSalaryPlanReferenceType",
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
	  SalaryPlanIdentification: {
      type: "TypeSalaryPlanIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SalaryPlanIdentification",
        type: "SalaryPlanIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomSalaryPlanReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomSalaryPlanReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSalaryPlanReferenceType;
Modeler.register(TypeSalaryPlanReferenceType, "TypeSalaryPlanReferenceType");
