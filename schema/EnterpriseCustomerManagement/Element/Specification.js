var Modeler = require("../Modeler.js");
var className = 'ElementSpecification';

var ElementSpecification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Specification: {
      type: "TypeSpecificationType",
      wsdlDefinition: {
        name: "Specification",
        type: "SpecificationType",
        "xsd:annotation": {
          "xsd:documentation": "A generic representation of a strongly typed Name Value pair that can be used to capture single or multiple values for a given name. Specifications are always used within the context of a Specification Group."
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
	  Specification: {
      type: "TypeSpecificationType",
      wsdlDefinition: {
        name: "Specification",
        type: "SpecificationType",
        "xsd:annotation": {
          "xsd:documentation": "A generic representation of a strongly typed Name Value pair that can be used to capture single or multiple values for a given name. Specifications are always used within the context of a Specification Group."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSpecification;
Modeler.register(ElementSpecification, "ElementSpecification");
