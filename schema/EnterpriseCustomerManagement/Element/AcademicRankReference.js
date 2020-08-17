var Modeler = require("../Modeler.js");
var className = 'ElementAcademicRankReference';

var ElementAcademicRankReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AcademicRankReference: {
      type: "TypeAcademicRankReferenceType",
      wsdlDefinition: {
        name: "AcademicRankReference",
        type: "AcademicRankReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the Academic Rank object such as for Job. For faculty positions, the academic rank represents information related to ranks such as professor, associate professor, assistant professor."
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
	  AcademicRankReference: {
      type: "TypeAcademicRankReferenceType",
      wsdlDefinition: {
        name: "AcademicRankReference",
        type: "AcademicRankReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the Academic Rank object such as for Job. For faculty positions, the academic rank represents information related to ranks such as professor, associate professor, assistant professor."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAcademicRankReference;
Modeler.register(ElementAcademicRankReference, "ElementAcademicRankReference");
