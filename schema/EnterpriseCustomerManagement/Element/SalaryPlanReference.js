var Modeler = require("../Modeler.js");
var className = 'ElementSalaryPlanReference';

var ElementSalaryPlanReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SalaryPlanReference: {
      type: "TypeSalaryPlanReferenceType",
      wsdlDefinition: {
        name: "SalaryPlanReference",
        type: "SalaryPlanReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the Salary Plan. It distinguishes currency and cost-of-living differences for workers with the same job code in a different locations. May also be called Salary Administration Plan"
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
	  SalaryPlanReference: {
      type: "TypeSalaryPlanReferenceType",
      wsdlDefinition: {
        name: "SalaryPlanReference",
        type: "SalaryPlanReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the Salary Plan. It distinguishes currency and cost-of-living differences for workers with the same job code in a different locations. May also be called Salary Administration Plan"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSalaryPlanReference;
Modeler.register(ElementSalaryPlanReference, "ElementSalaryPlanReference");
