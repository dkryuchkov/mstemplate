var Modeler = require("../Modeler.js");
var className = 'ElementLaborAgreementIdentification';

var ElementLaborAgreementIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LaborAgreementIdentification: {
      type: "TypeLaborAgreementIdentificationType",
      wsdlDefinition: {
        name: "LaborAgreementIdentification",
        type: "LaborAgreementIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Labor Agreement"
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
	  LaborAgreementIdentification: {
      type: "TypeLaborAgreementIdentificationType",
      wsdlDefinition: {
        name: "LaborAgreementIdentification",
        type: "LaborAgreementIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Labor Agreement"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementLaborAgreementIdentification;
Modeler.register(ElementLaborAgreementIdentification, "ElementLaborAgreementIdentification");
