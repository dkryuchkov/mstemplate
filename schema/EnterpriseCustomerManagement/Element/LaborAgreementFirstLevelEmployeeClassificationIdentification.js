var Modeler = require("../Modeler.js");
var className = 'ElementLaborAgreementFirstLevelEmployeeClassificationIdentification';

var ElementLaborAgreementFirstLevelEmployeeClassificationIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LaborAgreementFirstLevelEmployeeClassificationIdentification: {
      type: "TypeLaborAgreementFirstLevelEmployeeClassificationIdentificationType",
      wsdlDefinition: {
        name: "LaborAgreementFirstLevelEmployeeClassificationIdentification",
        type: "LaborAgreementFirstLevelEmployeeClassificationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Labor Agreement First Level Classification object"
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
	  LaborAgreementFirstLevelEmployeeClassificationIdentification: {
      type: "TypeLaborAgreementFirstLevelEmployeeClassificationIdentificationType",
      wsdlDefinition: {
        name: "LaborAgreementFirstLevelEmployeeClassificationIdentification",
        type: "LaborAgreementFirstLevelEmployeeClassificationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Labor Agreement First Level Classification object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementLaborAgreementFirstLevelEmployeeClassificationIdentification;
Modeler.register(ElementLaborAgreementFirstLevelEmployeeClassificationIdentification, "ElementLaborAgreementFirstLevelEmployeeClassificationIdentification");
