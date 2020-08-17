var Modeler = require("../Modeler.js");
var className = 'ElementObjectReference';

var ElementObjectReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ObjectReference: {
      type: "TypeObjectReferenceType",
      wsdlDefinition: {
        name: "ObjectReference",
        type: "ObjectReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "This component allows for a association from an object/component to any kind of object."
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
	  ObjectReference: {
      type: "TypeObjectReferenceType",
      wsdlDefinition: {
        name: "ObjectReference",
        type: "ObjectReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "This component allows for a association from an object/component to any kind of object."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementObjectReference;
Modeler.register(ElementObjectReference, "ElementObjectReference");
