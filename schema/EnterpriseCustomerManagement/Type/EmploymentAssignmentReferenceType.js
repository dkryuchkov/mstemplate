var Modeler = require("../Modeler.js");
var className = 'TypeEmploymentAssignmentReferenceType';

var TypeEmploymentAssignmentReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EmploymentAssignmentIdentification: {
      type: "TypeEmploymentAssignmentIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EmploymentAssignmentIdentification",
        type: "EmploymentAssignmentIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomEmploymentAssignmentReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomEmploymentAssignmentReferenceType",
        attribute: false,
        ns: "WL5G3N2"
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
        minOccurs: "0",
        name: "WL5G3N2:EmploymentAssignmentIdentification",
        type: "EmploymentAssignmentIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomEmploymentAssignmentReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomEmploymentAssignmentReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeEmploymentAssignmentReferenceType;
Modeler.register(TypeEmploymentAssignmentReferenceType, "TypeEmploymentAssignmentReferenceType");
