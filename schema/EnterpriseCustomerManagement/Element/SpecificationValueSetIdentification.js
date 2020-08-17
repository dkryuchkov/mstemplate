var Modeler = require("../Modeler.js");
var className = 'ElementSpecificationValueSetIdentification';

var ElementSpecificationValueSetIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SpecificationValueSetIdentification: {
      type: "TypeSpecificationValueSetIdentificationType",
      wsdlDefinition: {
        name: "SpecificationValueSetIdentification",
        type: "SpecificationValueSetIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a SpecificationValueSet"
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
	  SpecificationValueSetIdentification: {
      type: "TypeSpecificationValueSetIdentificationType",
      wsdlDefinition: {
        name: "SpecificationValueSetIdentification",
        type: "SpecificationValueSetIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a SpecificationValueSet"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSpecificationValueSetIdentification;
Modeler.register(ElementSpecificationValueSetIdentification, "ElementSpecificationValueSetIdentification");
