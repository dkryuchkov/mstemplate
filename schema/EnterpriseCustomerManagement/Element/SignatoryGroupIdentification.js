var Modeler = require("../Modeler.js");
var className = 'ElementSignatoryGroupIdentification';

var ElementSignatoryGroupIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SignatoryGroupIdentification: {
      type: "TypeSignatoryGroupIdentificationType",
      wsdlDefinition: {
        name: "SignatoryGroupIdentification",
        type: "SignatoryGroupIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Signatory Group"
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
	  SignatoryGroupIdentification: {
      type: "TypeSignatoryGroupIdentificationType",
      wsdlDefinition: {
        name: "SignatoryGroupIdentification",
        type: "SignatoryGroupIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of a Signatory Group"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSignatoryGroupIdentification;
Modeler.register(ElementSignatoryGroupIdentification, "ElementSignatoryGroupIdentification");
