var Modeler = require("../Modeler.js");
var className = 'ElementSpecificationReference';

var ElementSpecificationReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SpecificationReference: {
      type: "TypeSpecificationReferenceType",
      wsdlDefinition: {
        name: "SpecificationReference",
        type: "SpecificationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an instance of a Specification"
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
	  SpecificationReference: {
      type: "TypeSpecificationReferenceType",
      wsdlDefinition: {
        name: "SpecificationReference",
        type: "SpecificationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an instance of a Specification"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSpecificationReference;
Modeler.register(ElementSpecificationReference, "ElementSpecificationReference");
