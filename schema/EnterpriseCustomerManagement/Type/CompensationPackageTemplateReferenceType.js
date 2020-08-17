var Modeler = require("../Modeler.js");
var className = 'TypeCompensationPackageTemplateReferenceType';

var TypeCompensationPackageTemplateReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CompensationPackageTemplateIdentification: {
      type: "TypeCompensationPackageTemplateIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CompensationPackageTemplateIdentification",
        type: "CompensationPackageTemplateIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCompensationPackageTemplateReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomCompensationPackageTemplateReferenceType",
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
	  CompensationPackageTemplateIdentification: {
      type: "TypeCompensationPackageTemplateIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CompensationPackageTemplateIdentification",
        type: "CompensationPackageTemplateIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCompensationPackageTemplateReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomCompensationPackageTemplateReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCompensationPackageTemplateReferenceType;
Modeler.register(TypeCompensationPackageTemplateReferenceType, "TypeCompensationPackageTemplateReferenceType");
