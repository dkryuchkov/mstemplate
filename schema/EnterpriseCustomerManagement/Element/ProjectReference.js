var Modeler = require("../Modeler.js");
var className = 'ElementProjectReference';

var ElementProjectReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProjectReference: {
      type: "TypeProjectReferenceType",
      wsdlDefinition: {
        name: "ProjectReference",
        type: "ProjectReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Project object"
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
	  ProjectReference: {
      type: "TypeProjectReferenceType",
      wsdlDefinition: {
        name: "ProjectReference",
        type: "ProjectReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Project object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProjectReference;
Modeler.register(ElementProjectReference, "ElementProjectReference");
