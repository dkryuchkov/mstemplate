var Modeler = require("../Modeler.js");
var className = 'ElementAcademicRankIdentification';

var ElementAcademicRankIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AcademicRankIdentification: {
      type: "TypeAcademicRankIdentificationType",
      wsdlDefinition: {
        name: "AcademicRankIdentification",
        type: "AcademicRankIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Academic Rank"
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
	  AcademicRankIdentification: {
      type: "TypeAcademicRankIdentificationType",
      wsdlDefinition: {
        name: "AcademicRankIdentification",
        type: "AcademicRankIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of an Academic Rank"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAcademicRankIdentification;
Modeler.register(ElementAcademicRankIdentification, "ElementAcademicRankIdentification");
