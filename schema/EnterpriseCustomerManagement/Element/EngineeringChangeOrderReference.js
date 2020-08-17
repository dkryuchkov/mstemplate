var Modeler = require("../Modeler.js");
var className = 'ElementEngineeringChangeOrderReference';

var ElementEngineeringChangeOrderReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EngineeringChangeOrderReference: {
      type: "TypeEngineeringChangeOrderReferenceType",
      wsdlDefinition: {
        name: "EngineeringChangeOrderReference",
        type: "EngineeringChangeOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Engineering Change Order (ECO) is used for changes in documents such as processes and work instructions"
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
	  EngineeringChangeOrderReference: {
      type: "TypeEngineeringChangeOrderReferenceType",
      wsdlDefinition: {
        name: "EngineeringChangeOrderReference",
        type: "EngineeringChangeOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Engineering Change Order (ECO) is used for changes in documents such as processes and work instructions"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementEngineeringChangeOrderReference;
Modeler.register(ElementEngineeringChangeOrderReference, "ElementEngineeringChangeOrderReference");
