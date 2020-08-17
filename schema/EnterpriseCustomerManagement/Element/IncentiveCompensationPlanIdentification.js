var Modeler = require("../Modeler.js");
var className = 'ElementIncentiveCompensationPlanIdentification';

var ElementIncentiveCompensationPlanIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  IncentiveCompensationPlanIdentification: {
      type: "TypeIncentiveCompensationPlanIdentificationType",
      wsdlDefinition: {
        name: "IncentiveCompensationPlanIdentification",
        type: "IncentiveCompensationPlanIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Incentive Compensation Plan object"
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
	  IncentiveCompensationPlanIdentification: {
      type: "TypeIncentiveCompensationPlanIdentificationType",
      wsdlDefinition: {
        name: "IncentiveCompensationPlanIdentification",
        type: "IncentiveCompensationPlanIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Incentive Compensation Plan object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementIncentiveCompensationPlanIdentification;
Modeler.register(ElementIncentiveCompensationPlanIdentification, "ElementIncentiveCompensationPlanIdentification");
