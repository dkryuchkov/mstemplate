var Modeler = require("../Modeler.js");
var className = 'ElementContainerReference';

var ElementContainerReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ContainerReference: {
      type: "TypeContainerReferenceType",
      wsdlDefinition: {
        name: "ContainerReference",
        type: "ContainerReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to Container information."
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
	  ContainerReference: {
      type: "TypeContainerReferenceType",
      wsdlDefinition: {
        name: "ContainerReference",
        type: "ContainerReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to Container information."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementContainerReference;
Modeler.register(ElementContainerReference, "ElementContainerReference");
