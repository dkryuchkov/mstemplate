var Modeler = require("../Modeler.js");
var className = 'TypeLaborAgreementSecondLevelEmployeeClassificationReferenceType';

var TypeLaborAgreementSecondLevelEmployeeClassificationReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LaborAgreementSecondLevelEmployeeClassificationIdentification: {
      type: "TypeLaborAgreementSecondLevelEmployeeClassificationIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LaborAgreementSecondLevelEmployeeClassificationIdentification",
        type: "LaborAgreementSecondLevelEmployeeClassificationIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomLaborAgreementSecondLevelEmployeeClassificationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomLaborAgreementSecondLevelEmployeeClassificationReferenceType",
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
	  LaborAgreementSecondLevelEmployeeClassificationIdentification: {
      type: "TypeLaborAgreementSecondLevelEmployeeClassificationIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LaborAgreementSecondLevelEmployeeClassificationIdentification",
        type: "LaborAgreementSecondLevelEmployeeClassificationIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomLaborAgreementSecondLevelEmployeeClassificationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomLaborAgreementSecondLevelEmployeeClassificationReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeLaborAgreementSecondLevelEmployeeClassificationReferenceType;
Modeler.register(TypeLaborAgreementSecondLevelEmployeeClassificationReferenceType, "TypeLaborAgreementSecondLevelEmployeeClassificationReferenceType");
