var Modeler = require("../Modeler.js");
var className = 'ElementSpecificationValueSetLineIdentification';

var ElementSpecificationValueSetLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SpecificationValueSetLineIdentification: {
      type: "TypeSpecificationValueSetLineIdentificationType",
      wsdlDefinition: {
        name: "SpecificationValueSetLineIdentification",
        type: "SpecificationValueSetLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a SpecificationValueSetLine"
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
	  SpecificationValueSetLineIdentification: {
      type: "TypeSpecificationValueSetLineIdentificationType",
      wsdlDefinition: {
        name: "SpecificationValueSetLineIdentification",
        type: "SpecificationValueSetLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a SpecificationValueSetLine"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSpecificationValueSetLineIdentification;
Modeler.register(ElementSpecificationValueSetLineIdentification, "ElementSpecificationValueSetLineIdentification");
