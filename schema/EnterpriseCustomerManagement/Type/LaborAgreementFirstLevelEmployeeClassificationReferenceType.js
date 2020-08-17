var Modeler = require("../Modeler.js");
var className = 'TypeLaborAgreementFirstLevelEmployeeClassificationReferenceType';

var TypeLaborAgreementFirstLevelEmployeeClassificationReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LaborAgreementFirstLevelEmployeeClassificationIdentification: {
      type: "TypeLaborAgreementFirstLevelEmployeeClassificationIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LaborAgreementFirstLevelEmployeeClassificationIdentification",
        type: "LaborAgreementFirstLevelEmployeeClassificationIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomLaborAgreementFirstLevelEmployeeClassificationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomLaborAgreementFirstLevelEmployeeClassificationReferenceType",
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
	  LaborAgreementFirstLevelEmployeeClassificationIdentification: {
      type: "TypeLaborAgreementFirstLevelEmployeeClassificationIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LaborAgreementFirstLevelEmployeeClassificationIdentification",
        type: "LaborAgreementFirstLevelEmployeeClassificationIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomLaborAgreementFirstLevelEmployeeClassificationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomLaborAgreementFirstLevelEmployeeClassificationReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeLaborAgreementFirstLevelEmployeeClassificationReferenceType;
Modeler.register(TypeLaborAgreementFirstLevelEmployeeClassificationReferenceType, "TypeLaborAgreementFirstLevelEmployeeClassificationReferenceType");
