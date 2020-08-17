var Modeler = require("../Modeler.js");
var className = 'TypeEmploymentGradeReferenceType';

var TypeEmploymentGradeReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EmploymentGradeIdentification: {
      type: "TypeanyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EmploymentGradeIdentification",
        type: "xsd:anyType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomEmploymentGradeReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomEmploymentGradeReferenceType",
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
	  EmploymentGradeIdentification: {
      type: "TypeanyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EmploymentGradeIdentification",
        type: "xsd:anyType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomEmploymentGradeReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomEmploymentGradeReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeEmploymentGradeReferenceType;
Modeler.register(TypeEmploymentGradeReferenceType, "TypeEmploymentGradeReferenceType");
