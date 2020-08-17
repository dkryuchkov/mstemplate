var Modeler = require("../Modeler.js");
var className = 'ElementParentSalesObjectiveReference';

var ElementParentSalesObjectiveReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ParentSalesObjectiveReference: {
      type: "TypeSalesObjectiveReferenceType",
      wsdlDefinition: {
        name: "ParentSalesObjectiveReference",
        type: "SalesObjectiveReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a SalesObjective which is a parent of another SalesObjective. This allows for hierachical relationship between instances of SalesObjective."
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
	  ParentSalesObjectiveReference: {
      type: "TypeSalesObjectiveReferenceType",
      wsdlDefinition: {
        name: "ParentSalesObjectiveReference",
        type: "SalesObjectiveReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a SalesObjective which is a parent of another SalesObjective. This allows for hierachical relationship between instances of SalesObjective."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementParentSalesObjectiveReference;
Modeler.register(ElementParentSalesObjectiveReference, "ElementParentSalesObjectiveReference");
