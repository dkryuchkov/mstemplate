var Modeler = require("../Modeler.js");
var className = 'ElementClassificationSpecificationGroupReference';

var ElementClassificationSpecificationGroupReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ClassificationSpecificationGroupReference: {
      type: "TypeClassificationSpecificationGroupReferenceType",
      wsdlDefinition: {
        name: "ClassificationSpecificationGroupReference",
        type: "ClassificationSpecificationGroupReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Specification Group within a Classification object"
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
	  ClassificationSpecificationGroupReference: {
      type: "TypeClassificationSpecificationGroupReferenceType",
      wsdlDefinition: {
        name: "ClassificationSpecificationGroupReference",
        type: "ClassificationSpecificationGroupReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Specification Group within a Classification object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementClassificationSpecificationGroupReference;
Modeler.register(ElementClassificationSpecificationGroupReference, "ElementClassificationSpecificationGroupReference");
