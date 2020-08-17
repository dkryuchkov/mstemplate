var Modeler = require("../Modeler.js");
var className = 'ElementSalesObjectiveReference';

var ElementSalesObjectiveReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SalesObjectiveReference: {
      type: "TypeSalesObjectiveReferenceType",
      wsdlDefinition: {
        name: "SalesObjectiveReference",
        type: "SalesObjectiveReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a SalesObjective. A SalesObjective is a goal that is simple, measurable, achievable and time bound.  SalesObjective can be hierarchical and can have multiple activities.  As an example, a SalesObjective could be to increase the sales for Tier 1 customers by 5% in a given quarter. To accomplish this, a regional manager will associate all the Tier 1 customers to this specific SalesObjective and track progress over a weekly basis.  Based on the progress, he may change his tactics to achieve the objective.  An example of a tactic would be to increase the number of times the regional manager visits the Tier 1 customers during that quarter. Each visit would be setup as an activity related to the SalesObjective."
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
	  SalesObjectiveReference: {
      type: "TypeSalesObjectiveReferenceType",
      wsdlDefinition: {
        name: "SalesObjectiveReference",
        type: "SalesObjectiveReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a SalesObjective. A SalesObjective is a goal that is simple, measurable, achievable and time bound.  SalesObjective can be hierarchical and can have multiple activities.  As an example, a SalesObjective could be to increase the sales for Tier 1 customers by 5% in a given quarter. To accomplish this, a regional manager will associate all the Tier 1 customers to this specific SalesObjective and track progress over a weekly basis.  Based on the progress, he may change his tactics to achieve the objective.  An example of a tactic would be to increase the number of times the regional manager visits the Tier 1 customers during that quarter. Each visit would be setup as an activity related to the SalesObjective."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSalesObjectiveReference;
Modeler.register(ElementSalesObjectiveReference, "ElementSalesObjectiveReference");
