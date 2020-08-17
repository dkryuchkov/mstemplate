var Modeler = require("../Modeler.js");
var className = 'ElementClassificationReference';

var ElementClassificationReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ClassificationReference: {
      type: "TypeClassificationReferenceType",
      wsdlDefinition: {
        name: "ClassificationReference",
        type: "ClassificationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Classification object which represents a category or grouping of related objects or entities"
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
	  ClassificationReference: {
      type: "TypeClassificationReferenceType",
      wsdlDefinition: {
        name: "ClassificationReference",
        type: "ClassificationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Classification object which represents a category or grouping of related objects or entities"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementClassificationReference;
Modeler.register(ElementClassificationReference, "ElementClassificationReference");
