var Modeler = require("../Modeler.js");
var className = 'TypeCareerPathReferenceType';

var TypeCareerPathReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CareerPathIdentification: {
      type: "TypeCareerPathIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CareerPathIdentification",
        type: "CareerPathIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCareerPathReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomCareerPathReferenceType",
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
	  CareerPathIdentification: {
      type: "TypeCareerPathIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CareerPathIdentification",
        type: "CareerPathIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCareerPathReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomCareerPathReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCareerPathReferenceType;
Modeler.register(TypeCareerPathReferenceType, "TypeCareerPathReferenceType");
