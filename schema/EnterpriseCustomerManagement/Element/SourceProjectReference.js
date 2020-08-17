var Modeler = require("../Modeler.js");
var className = 'ElementSourceProjectReference';

var ElementSourceProjectReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SourceProjectReference: {
      type: "TypeProjectReferenceType",
      wsdlDefinition: {
        name: "SourceProjectReference",
        type: "ProjectReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the project used as the template or source for creating the containing project."
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
	  SourceProjectReference: {
      type: "TypeProjectReferenceType",
      wsdlDefinition: {
        name: "SourceProjectReference",
        type: "ProjectReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the project used as the template or source for creating the containing project."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSourceProjectReference;
Modeler.register(ElementSourceProjectReference, "ElementSourceProjectReference");
