var Modeler = require("../Modeler.js");
var className = 'ElementParentClassificationReference';

var ElementParentClassificationReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ParentClassificationReference: {
      type: "TypeClassificationReferenceType",
      wsdlDefinition: {
        name: "ParentClassificationReference",
        type: "ClassificationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the parent classification of the object"
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
	  ParentClassificationReference: {
      type: "TypeClassificationReferenceType",
      wsdlDefinition: {
        name: "ParentClassificationReference",
        type: "ClassificationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the parent classification of the object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementParentClassificationReference;
Modeler.register(ElementParentClassificationReference, "ElementParentClassificationReference");
