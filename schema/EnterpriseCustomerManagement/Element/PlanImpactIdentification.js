var Modeler = require("../Modeler.js");
var className = 'ElementPlanImpactIdentification';

var ElementPlanImpactIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PlanImpactIdentification: {
      type: "TypePlanImpactIdentificationType",
      wsdlDefinition: {
        name: "PlanImpactIdentification",
        type: "PlanImpactIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Plan Impact component in the Price List object"
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
	  PlanImpactIdentification: {
      type: "TypePlanImpactIdentificationType",
      wsdlDefinition: {
        name: "PlanImpactIdentification",
        type: "PlanImpactIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Plan Impact component in the Price List object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPlanImpactIdentification;
Modeler.register(ElementPlanImpactIdentification, "ElementPlanImpactIdentification");
