var Modeler = require("../Modeler.js");
var className = 'ElementProjectTaskReference';

var ElementProjectTaskReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProjectTaskReference: {
      type: "TypeProjectTaskReferenceType",
      wsdlDefinition: {
        name: "ProjectTaskReference",
        type: "ProjectTaskReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Task within a Financial project."
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
	  ProjectTaskReference: {
      type: "TypeProjectTaskReferenceType",
      wsdlDefinition: {
        name: "ProjectTaskReference",
        type: "ProjectTaskReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Task within a Financial project."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProjectTaskReference;
Modeler.register(ElementProjectTaskReference, "ElementProjectTaskReference");
