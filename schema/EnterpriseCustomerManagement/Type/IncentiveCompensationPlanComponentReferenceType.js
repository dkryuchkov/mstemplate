var Modeler = require("../Modeler.js");
var className = 'TypeIncentiveCompensationPlanComponentReferenceType';

var TypeIncentiveCompensationPlanComponentReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  IncentiveCompensationPlanIdentification: {
      type: "TypeIncentiveCompensationPlanIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IncentiveCompensationPlanIdentification",
        type: "IncentiveCompensationPlanIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IncentiveCompensationPlanComponentIdentification: {
      type: "TypeIncentiveCompensationPlanComponentIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IncentiveCompensationPlanComponentIdentification",
        type: "IncentiveCompensationPlanComponentIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomIncentiveCompensationPlanComponentReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomIncentiveCompensationPlanComponentReferenceType",
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
	  IncentiveCompensationPlanIdentification: {
      type: "TypeIncentiveCompensationPlanIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IncentiveCompensationPlanIdentification",
        type: "IncentiveCompensationPlanIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IncentiveCompensationPlanComponentIdentification: {
      type: "TypeIncentiveCompensationPlanComponentIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IncentiveCompensationPlanComponentIdentification",
        type: "IncentiveCompensationPlanComponentIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomIncentiveCompensationPlanComponentReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomIncentiveCompensationPlanComponentReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeIncentiveCompensationPlanComponentReferenceType;
Modeler.register(TypeIncentiveCompensationPlanComponentReferenceType, "TypeIncentiveCompensationPlanComponentReferenceType");
