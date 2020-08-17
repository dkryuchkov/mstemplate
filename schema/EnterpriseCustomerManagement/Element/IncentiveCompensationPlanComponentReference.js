var Modeler = require("../Modeler.js");
var className = 'ElementIncentiveCompensationPlanComponentReference';

var ElementIncentiveCompensationPlanComponentReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  IncentiveCompensationPlanComponentReference: {
      type: "TypeIncentiveCompensationPlanComponentReferenceType",
      wsdlDefinition: {
        name: "IncentiveCompensationPlanComponentReference",
        type: "IncentiveCompensationPlanComponentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "An incentive compensation plan consists of a set of plan components that  define how earnings are calculated for compensation participants that are  assigned to the plan. E.g. \"2007 Database Sales Representative Plan\" defines how commissions should be calcuated for sales representatives in 2007. Each compensation plan has one to many plan components. E.g. 2007 Database  Sales Representative Plan has two plan components, Quota-based Commission and  Quarterly Bonus."
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
	  IncentiveCompensationPlanComponentReference: {
      type: "TypeIncentiveCompensationPlanComponentReferenceType",
      wsdlDefinition: {
        name: "IncentiveCompensationPlanComponentReference",
        type: "IncentiveCompensationPlanComponentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "An incentive compensation plan consists of a set of plan components that  define how earnings are calculated for compensation participants that are  assigned to the plan. E.g. \"2007 Database Sales Representative Plan\" defines how commissions should be calcuated for sales representatives in 2007. Each compensation plan has one to many plan components. E.g. 2007 Database  Sales Representative Plan has two plan components, Quota-based Commission and  Quarterly Bonus."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementIncentiveCompensationPlanComponentReference;
Modeler.register(ElementIncentiveCompensationPlanComponentReference, "ElementIncentiveCompensationPlanComponentReference");
