var Modeler = require("../Modeler.js");
var className = 'ElementEngineeringChangeOrderLineReference';

var ElementEngineeringChangeOrderLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EngineeringChangeOrderLineReference: {
      type: "TypeEngineeringChangeOrderLineReferenceType",
      wsdlDefinition: {
        name: "EngineeringChangeOrderLineReference",
        type: "EngineeringChangeOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Line Item on an Engineering Change Order."
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
	  EngineeringChangeOrderLineReference: {
      type: "TypeEngineeringChangeOrderLineReferenceType",
      wsdlDefinition: {
        name: "EngineeringChangeOrderLineReference",
        type: "EngineeringChangeOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Line Item on an Engineering Change Order."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementEngineeringChangeOrderLineReference;
Modeler.register(ElementEngineeringChangeOrderLineReference, "ElementEngineeringChangeOrderLineReference");
