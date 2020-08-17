var Modeler = require("../Modeler.js");
var className = 'ElementEmploymentAssignmentReference';

var ElementEmploymentAssignmentReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EmploymentAssignmentReference: {
      type: "TypeEmploymentAssignmentReferenceType",
      wsdlDefinition: {
        name: "EmploymentAssignmentReference",
        type: "EmploymentAssignmentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the employees' assignment\n ."
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
	  EmploymentAssignmentReference: {
      type: "TypeEmploymentAssignmentReferenceType",
      wsdlDefinition: {
        name: "EmploymentAssignmentReference",
        type: "EmploymentAssignmentReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the employees' assignment\n ."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementEmploymentAssignmentReference;
Modeler.register(ElementEmploymentAssignmentReference, "ElementEmploymentAssignmentReference");
