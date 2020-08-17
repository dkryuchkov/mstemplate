var Modeler = require("../Modeler.js");
var className = 'ElementProjectSchedulableResourceReference';

var ElementProjectSchedulableResourceReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProjectSchedulableResourceReference: {
      type: "TypeProjectSchedulableResourceReferenceType",
      wsdlDefinition: {
        name: "ProjectSchedulableResourceReference",
        type: "ProjectSchedulableResourceReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Project Schedulable Resource within a Project Resource Set object"
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
	  ProjectSchedulableResourceReference: {
      type: "TypeProjectSchedulableResourceReferenceType",
      wsdlDefinition: {
        name: "ProjectSchedulableResourceReference",
        type: "ProjectSchedulableResourceReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Project Schedulable Resource within a Project Resource Set object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProjectSchedulableResourceReference;
Modeler.register(ElementProjectSchedulableResourceReference, "ElementProjectSchedulableResourceReference");
