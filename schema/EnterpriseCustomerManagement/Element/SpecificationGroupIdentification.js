var Modeler = require("../Modeler.js");
var className = 'ElementSpecificationGroupIdentification';

var ElementSpecificationGroupIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SpecificationGroupIdentification: {
      type: "TypeSpecificationGroupIdentificationType",
      wsdlDefinition: {
        name: "SpecificationGroupIdentification",
        type: "SpecificationGroupIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a SpecificationGroup"
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
	  SpecificationGroupIdentification: {
      type: "TypeSpecificationGroupIdentificationType",
      wsdlDefinition: {
        name: "SpecificationGroupIdentification",
        type: "SpecificationGroupIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a SpecificationGroup"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSpecificationGroupIdentification;
Modeler.register(ElementSpecificationGroupIdentification, "ElementSpecificationGroupIdentification");
