var Modeler = require("../Modeler.js");
var className = 'ElementGovernmentAgencyIdentification';

var ElementGovernmentAgencyIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  GovernmentAgencyIdentification: {
      type: "TypeGovernmentAgencyIdentificationType",
      wsdlDefinition: {
        name: "GovernmentAgencyIdentification",
        type: "GovernmentAgencyIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Government Agency object."
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
	  GovernmentAgencyIdentification: {
      type: "TypeGovernmentAgencyIdentificationType",
      wsdlDefinition: {
        name: "GovernmentAgencyIdentification",
        type: "GovernmentAgencyIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Government Agency object."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementGovernmentAgencyIdentification;
Modeler.register(ElementGovernmentAgencyIdentification, "ElementGovernmentAgencyIdentification");
