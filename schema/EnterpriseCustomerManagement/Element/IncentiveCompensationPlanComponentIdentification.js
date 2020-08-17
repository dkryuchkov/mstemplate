var Modeler = require("../Modeler.js");
var className = 'ElementIncentiveCompensationPlanComponentIdentification';

var ElementIncentiveCompensationPlanComponentIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  IncentiveCompensationPlanComponentIdentification: {
      type: "TypeIncentiveCompensationPlanComponentIdentificationType",
      wsdlDefinition: {
        name: "IncentiveCompensationPlanComponentIdentification",
        type: "IncentiveCompensationPlanComponentIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a component within an Incentive Compensation Plan object"
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
	  IncentiveCompensationPlanComponentIdentification: {
      type: "TypeIncentiveCompensationPlanComponentIdentificationType",
      wsdlDefinition: {
        name: "IncentiveCompensationPlanComponentIdentification",
        type: "IncentiveCompensationPlanComponentIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a component within an Incentive Compensation Plan object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementIncentiveCompensationPlanComponentIdentification;
Modeler.register(ElementIncentiveCompensationPlanComponentIdentification, "ElementIncentiveCompensationPlanComponentIdentification");
