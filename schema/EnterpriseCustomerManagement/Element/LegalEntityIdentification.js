var Modeler = require("../Modeler.js");
var className = 'ElementLegalEntityIdentification';

var ElementLegalEntityIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  LegalEntityIdentification: {
      type: "TypeLegalEntityIdentificationType",
      wsdlDefinition: {
        name: "LegalEntityIdentification",
        type: "LegalEntityIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Legal Entity"
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
	  LegalEntityIdentification: {
      type: "TypeLegalEntityIdentificationType",
      wsdlDefinition: {
        name: "LegalEntityIdentification",
        type: "LegalEntityIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Legal Entity"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementLegalEntityIdentification;
Modeler.register(ElementLegalEntityIdentification, "ElementLegalEntityIdentification");
