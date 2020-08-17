var Modeler = require("../Modeler.js");
var className = 'ElementEngineeringChangeOrderLineIdentification';

var ElementEngineeringChangeOrderLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EngineeringChangeOrderLineIdentification: {
      type: "TypeEngineeringChangeOrderLineIdentificationType",
      wsdlDefinition: {
        name: "EngineeringChangeOrderLineIdentification",
        type: "EngineeringChangeOrderLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Line Item on an Engineering Change Order"
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
	  EngineeringChangeOrderLineIdentification: {
      type: "TypeEngineeringChangeOrderLineIdentificationType",
      wsdlDefinition: {
        name: "EngineeringChangeOrderLineIdentification",
        type: "EngineeringChangeOrderLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Line Item on an Engineering Change Order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementEngineeringChangeOrderLineIdentification;
Modeler.register(ElementEngineeringChangeOrderLineIdentification, "ElementEngineeringChangeOrderLineIdentification");
