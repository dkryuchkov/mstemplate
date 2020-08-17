var Modeler = require("../Modeler.js");
var className = 'TypeAssignmentGradeReferenceType';

var TypeAssignmentGradeReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AssignmentGradeIdentification: {
      type: "TypeAssignmentGradeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AssignmentGradeIdentification",
        type: "AssignmentGradeIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomAssignmentGradeReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomAssignmentGradeReferenceType",
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
	  AssignmentGradeIdentification: {
      type: "TypeAssignmentGradeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AssignmentGradeIdentification",
        type: "AssignmentGradeIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomAssignmentGradeReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomAssignmentGradeReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAssignmentGradeReferenceType;
Modeler.register(TypeAssignmentGradeReferenceType, "TypeAssignmentGradeReferenceType");
