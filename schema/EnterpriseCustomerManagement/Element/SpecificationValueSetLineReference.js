var Modeler = require("../Modeler.js");
var className = 'ElementSpecificationValueSetLineReference';

var ElementSpecificationValueSetLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SpecificationValueSetLineReference: {
      type: "TypeSpecificationValueSetLineReferenceType",
      wsdlDefinition: {
        name: "SpecificationValueSetLineReference",
        type: "SpecificationValueSetLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Specification Value Set Line in a Specification Value Set object"
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
	  SpecificationValueSetLineReference: {
      type: "TypeSpecificationValueSetLineReferenceType",
      wsdlDefinition: {
        name: "SpecificationValueSetLineReference",
        type: "SpecificationValueSetLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Specification Value Set Line in a Specification Value Set object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSpecificationValueSetLineReference;
Modeler.register(ElementSpecificationValueSetLineReference, "ElementSpecificationValueSetLineReference");
