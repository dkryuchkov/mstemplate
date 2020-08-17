var Modeler = require("../Modeler.js");
var className = 'TypeAcademicRankReferenceType';

var TypeAcademicRankReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AcademicRankIdentification: {
      type: "TypeAcademicRankIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AcademicRankIdentification",
        type: "AcademicRankIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomAcademicRankReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomAcademicRankReferenceType",
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
	  AcademicRankIdentification: {
      type: "TypeAcademicRankIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AcademicRankIdentification",
        type: "AcademicRankIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomAcademicRankReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomAcademicRankReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAcademicRankReferenceType;
Modeler.register(TypeAcademicRankReferenceType, "TypeAcademicRankReferenceType");
