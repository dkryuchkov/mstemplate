var Modeler = require("../Modeler.js");
var className = 'ElementProjectNonSchedulableResourceReference';

var ElementProjectNonSchedulableResourceReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProjectNonSchedulableResourceReference: {
      type: "TypeProjectNonSchedulableResourceReferenceType",
      wsdlDefinition: {
        name: "ProjectNonSchedulableResourceReference",
        type: "ProjectNonSchedulableResourceReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Project Non-Schedulable Resource within a Project Resource Set object"
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
	  ProjectNonSchedulableResourceReference: {
      type: "TypeProjectNonSchedulableResourceReferenceType",
      wsdlDefinition: {
        name: "ProjectNonSchedulableResourceReference",
        type: "ProjectNonSchedulableResourceReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Project Non-Schedulable Resource within a Project Resource Set object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProjectNonSchedulableResourceReference;
Modeler.register(ElementProjectNonSchedulableResourceReference, "ElementProjectNonSchedulableResourceReference");
