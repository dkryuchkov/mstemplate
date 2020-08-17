var Modeler = require("../Modeler.js");
var className = 'TypeJobFamilyReferenceType';

var TypeJobFamilyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  JobFamilyIdentification: {
      type: "TypeJobFamilyIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:JobFamilyIdentification",
        type: "JobFamilyIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomJobFamilyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomJobFamilyReferenceType",
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
	  JobFamilyIdentification: {
      type: "TypeJobFamilyIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:JobFamilyIdentification",
        type: "JobFamilyIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomJobFamilyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomJobFamilyReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeJobFamilyReferenceType;
Modeler.register(TypeJobFamilyReferenceType, "TypeJobFamilyReferenceType");
