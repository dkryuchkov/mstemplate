var Modeler = require("../Modeler.js");
var className = 'ElementSpecificationValueSetReference';

var ElementSpecificationValueSetReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SpecificationValueSetReference: {
      type: "TypeSpecificationValueSetReferenceType",
      wsdlDefinition: {
        name: "SpecificationValueSetReference",
        type: "SpecificationValueSetReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an instance of a SpecificationValueSet"
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
	  SpecificationValueSetReference: {
      type: "TypeSpecificationValueSetReferenceType",
      wsdlDefinition: {
        name: "SpecificationValueSetReference",
        type: "SpecificationValueSetReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an instance of a SpecificationValueSet"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSpecificationValueSetReference;
Modeler.register(ElementSpecificationValueSetReference, "ElementSpecificationValueSetReference");
