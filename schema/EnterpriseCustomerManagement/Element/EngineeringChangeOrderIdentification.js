var Modeler = require("../Modeler.js");
var className = 'ElementEngineeringChangeOrderIdentification';

var ElementEngineeringChangeOrderIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EngineeringChangeOrderIdentification: {
      type: "TypeEngineeringChangeOrderIdentificationType",
      wsdlDefinition: {
        name: "EngineeringChangeOrderIdentification",
        type: "EngineeringChangeOrderIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of an Engineering Change Order"
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
	  EngineeringChangeOrderIdentification: {
      type: "TypeEngineeringChangeOrderIdentificationType",
      wsdlDefinition: {
        name: "EngineeringChangeOrderIdentification",
        type: "EngineeringChangeOrderIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of an Engineering Change Order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementEngineeringChangeOrderIdentification;
Modeler.register(ElementEngineeringChangeOrderIdentification, "ElementEngineeringChangeOrderIdentification");
