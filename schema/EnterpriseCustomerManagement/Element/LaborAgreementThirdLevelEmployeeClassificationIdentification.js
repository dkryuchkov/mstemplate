var Modeler = require("../Modeler.js");
var className = 'ElementLaborAgreementThirdLevelEmployeeClassificationIdentification';

var ElementLaborAgreementThirdLevelEmployeeClassificationIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LaborAgreementThirdLevelEmployeeClassificationIdentification: {
      type: "TypeLaborAgreementThirdLevelEmployeeClassificationIdentificationType",
      wsdlDefinition: {
        name: "LaborAgreementThirdLevelEmployeeClassificationIdentification",
        type: "LaborAgreementThirdLevelEmployeeClassificationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Labor Agreement Third Level Classification object"
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
	  LaborAgreementThirdLevelEmployeeClassificationIdentification: {
      type: "TypeLaborAgreementThirdLevelEmployeeClassificationIdentificationType",
      wsdlDefinition: {
        name: "LaborAgreementThirdLevelEmployeeClassificationIdentification",
        type: "LaborAgreementThirdLevelEmployeeClassificationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Labor Agreement Third Level Classification object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementLaborAgreementThirdLevelEmployeeClassificationIdentification;
Modeler.register(ElementLaborAgreementThirdLevelEmployeeClassificationIdentification, "ElementLaborAgreementThirdLevelEmployeeClassificationIdentification");
