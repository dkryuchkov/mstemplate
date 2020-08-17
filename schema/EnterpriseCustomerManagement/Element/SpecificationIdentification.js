var Modeler = require("../Modeler.js");
var className = 'ElementSpecificationIdentification';

var ElementSpecificationIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SpecificationIdentification: {
      type: "TypeSpecificationIdentificationType",
      wsdlDefinition: {
        name: "SpecificationIdentification",
        type: "SpecificationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Specification"
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
	  SpecificationIdentification: {
      type: "TypeSpecificationIdentificationType",
      wsdlDefinition: {
        name: "SpecificationIdentification",
        type: "SpecificationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Specification"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSpecificationIdentification;
Modeler.register(ElementSpecificationIdentification, "ElementSpecificationIdentification");
