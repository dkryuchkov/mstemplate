var Modeler = require("../Modeler.js");
var className = 'ElementEmploymentGradeIdentification';

var ElementEmploymentGradeIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EmploymentGradeIdentification: {
      type: "TypeEmploymentGradeIdentificationType",
      wsdlDefinition: {
        name: "EmploymentGradeIdentification",
        type: "EmploymentGradeIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies an employment grade"
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
	  EmploymentGradeIdentification: {
      type: "TypeEmploymentGradeIdentificationType",
      wsdlDefinition: {
        name: "EmploymentGradeIdentification",
        type: "EmploymentGradeIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identifies an employment grade"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementEmploymentGradeIdentification;
Modeler.register(ElementEmploymentGradeIdentification, "ElementEmploymentGradeIdentification");
