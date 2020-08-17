var Modeler = require("../Modeler.js");
var className = 'ElementPersonCertification';

var ElementPersonCertification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PersonCertification: {
      type: "TypePersonCertificationType",
      wsdlDefinition: {
        name: "PersonCertification",
        type: "PersonCertificationType",
        "xsd:annotation": {
          "xsd:documentation": "Certifications of a person"
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
	  PersonCertification: {
      type: "TypePersonCertificationType",
      wsdlDefinition: {
        name: "PersonCertification",
        type: "PersonCertificationType",
        "xsd:annotation": {
          "xsd:documentation": "Certifications of a person"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPersonCertification;
Modeler.register(ElementPersonCertification, "ElementPersonCertification");
