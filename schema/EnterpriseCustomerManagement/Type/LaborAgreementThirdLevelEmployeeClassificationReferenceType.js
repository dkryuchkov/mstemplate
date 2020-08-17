var Modeler = require("../Modeler.js");
var className = 'TypeLaborAgreementThirdLevelEmployeeClassificationReferenceType';

var TypeLaborAgreementThirdLevelEmployeeClassificationReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LaborAgreementThirdLevelEmployeeClassificationIdentification: {
      type: "TypeLaborAgreementThirdLevelEmployeeClassificationIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LaborAgreementThirdLevelEmployeeClassificationIdentification",
        type: "LaborAgreementThirdLevelEmployeeClassificationIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomLaborAgreementThirdLevelEmployeeClassificationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomLaborAgreementThirdLevelEmployeeClassificationReferenceType",
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
	  LaborAgreementThirdLevelEmployeeClassificationIdentification: {
      type: "TypeLaborAgreementThirdLevelEmployeeClassificationIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LaborAgreementThirdLevelEmployeeClassificationIdentification",
        type: "LaborAgreementThirdLevelEmployeeClassificationIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomLaborAgreementThirdLevelEmployeeClassificationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomLaborAgreementThirdLevelEmployeeClassificationReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeLaborAgreementThirdLevelEmployeeClassificationReferenceType;
Modeler.register(TypeLaborAgreementThirdLevelEmployeeClassificationReferenceType, "TypeLaborAgreementThirdLevelEmployeeClassificationReferenceType");
