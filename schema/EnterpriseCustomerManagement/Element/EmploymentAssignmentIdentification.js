var Modeler = require("../Modeler.js");
var className = 'ElementEmploymentAssignmentIdentification';

var ElementEmploymentAssignmentIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EmploymentAssignmentIdentification: {
      type: "TypeEmploymentAssignmentIdentificationType",
      wsdlDefinition: {
        name: "EmploymentAssignmentIdentification",
        type: "EmploymentAssignmentIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies an employment assignment"
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
	  EmploymentAssignmentIdentification: {
      type: "TypeEmploymentAssignmentIdentificationType",
      wsdlDefinition: {
        name: "EmploymentAssignmentIdentification",
        type: "EmploymentAssignmentIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies an employment assignment"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementEmploymentAssignmentIdentification;
Modeler.register(ElementEmploymentAssignmentIdentification, "ElementEmploymentAssignmentIdentification");
