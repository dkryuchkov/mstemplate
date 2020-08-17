var Modeler = require("../Modeler.js");
var className = 'ElementSourceObjectReference';

var ElementSourceObjectReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SourceObjectReference: {
      type: "TypeObjectReferenceType",
      wsdlDefinition: {
        name: "SourceObjectReference",
        type: "ObjectReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an object that has triggered or is related to the existence of the object containing this Source Object."
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
	  SourceObjectReference: {
      type: "TypeObjectReferenceType",
      wsdlDefinition: {
        name: "SourceObjectReference",
        type: "ObjectReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an object that has triggered or is related to the existence of the object containing this Source Object."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSourceObjectReference;
Modeler.register(ElementSourceObjectReference, "ElementSourceObjectReference");
