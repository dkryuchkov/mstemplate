var Modeler = require("../Modeler.js");
var className = 'ElementLaborAgreementSecondLevelEmployeeClassificationIdentification';

var ElementLaborAgreementSecondLevelEmployeeClassificationIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LaborAgreementSecondLevelEmployeeClassificationIdentification: {
      type: "TypeLaborAgreementSecondLevelEmployeeClassificationIdentificationType",
      wsdlDefinition: {
        name: "LaborAgreementSecondLevelEmployeeClassificationIdentification",
        type: "LaborAgreementSecondLevelEmployeeClassificationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Labor Agreement Second Level Classification object"
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
	  LaborAgreementSecondLevelEmployeeClassificationIdentification: {
      type: "TypeLaborAgreementSecondLevelEmployeeClassificationIdentificationType",
      wsdlDefinition: {
        name: "LaborAgreementSecondLevelEmployeeClassificationIdentification",
        type: "LaborAgreementSecondLevelEmployeeClassificationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Labor Agreement Second Level Classification object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementLaborAgreementSecondLevelEmployeeClassificationIdentification;
Modeler.register(ElementLaborAgreementSecondLevelEmployeeClassificationIdentification, "ElementLaborAgreementSecondLevelEmployeeClassificationIdentification");
