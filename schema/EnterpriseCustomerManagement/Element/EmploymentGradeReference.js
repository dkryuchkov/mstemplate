var Modeler = require("../Modeler.js");
var className = 'ElementEmploymentGradeReference';

var ElementEmploymentGradeReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EmploymentGradeReference: {
      type: "TypeEmploymentGradeReferenceType",
      wsdlDefinition: {
        name: "EmploymentGradeReference",
        type: "EmploymentGradeReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an employment grade\n ."
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
	  EmploymentGradeReference: {
      type: "TypeEmploymentGradeReferenceType",
      wsdlDefinition: {
        name: "EmploymentGradeReference",
        type: "EmploymentGradeReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to an employment grade\n ."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementEmploymentGradeReference;
Modeler.register(ElementEmploymentGradeReference, "ElementEmploymentGradeReference");
