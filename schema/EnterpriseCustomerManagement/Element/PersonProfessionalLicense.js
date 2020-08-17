var Modeler = require("../Modeler.js");
var className = 'ElementPersonProfessionalLicense';

var ElementPersonProfessionalLicense = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PersonProfessionalLicense: {
      type: "TypePersonProfessionalLicenseType",
      wsdlDefinition: {
        name: "PersonProfessionalLicense",
        type: "PersonProfessionalLicenseType",
        "xsd:annotation": {
          "xsd:documentation": "A person professional license represents a authorization by a state or agency for a person to perform work or practice in a certain professional area. For example, a family doctor needs a state issued license to practice a family medicine in a particular state, a gynecologist needs a different state issued license to practice gynecology in a particular state. Certification can be different from license and do not necessary means an authorization to practice. For example, a physician's board certification is independent of state issued license."
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
	  PersonProfessionalLicense: {
      type: "TypePersonProfessionalLicenseType",
      wsdlDefinition: {
        name: "PersonProfessionalLicense",
        type: "PersonProfessionalLicenseType",
        "xsd:annotation": {
          "xsd:documentation": "A person professional license represents a authorization by a state or agency for a person to perform work or practice in a certain professional area. For example, a family doctor needs a state issued license to practice a family medicine in a particular state, a gynecologist needs a different state issued license to practice gynecology in a particular state. Certification can be different from license and do not necessary means an authorization to practice. For example, a physician's board certification is independent of state issued license."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPersonProfessionalLicense;
Modeler.register(ElementPersonProfessionalLicense, "ElementPersonProfessionalLicense");
