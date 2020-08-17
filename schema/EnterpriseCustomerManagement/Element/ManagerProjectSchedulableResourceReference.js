var Modeler = require("../Modeler.js");
var className = 'ElementManagerProjectSchedulableResourceReference';

var ElementManagerProjectSchedulableResourceReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ManagerProjectSchedulableResourceReference: {
      type: "TypeProjectSchedulableResourceReferenceType",
      wsdlDefinition: {
        name: "ManagerProjectSchedulableResourceReference",
        type: "ProjectSchedulableResourceReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Project Schedulable Resource which is a manager"
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
	  ManagerProjectSchedulableResourceReference: {
      type: "TypeProjectSchedulableResourceReferenceType",
      wsdlDefinition: {
        name: "ManagerProjectSchedulableResourceReference",
        type: "ProjectSchedulableResourceReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Project Schedulable Resource which is a manager"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementManagerProjectSchedulableResourceReference;
Modeler.register(ElementManagerProjectSchedulableResourceReference, "ElementManagerProjectSchedulableResourceReference");
