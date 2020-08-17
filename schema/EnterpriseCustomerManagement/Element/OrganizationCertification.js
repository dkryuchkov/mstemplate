var Modeler = require("../Modeler.js");
var className = 'ElementOrganizationCertification';

var ElementOrganizationCertification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OrganizationCertification: {
      type: "TypeOrganizationCertificationType",
      wsdlDefinition: {
        name: "OrganizationCertification",
        type: "OrganizationCertificationType",
        "xsd:annotation": {
          "xsd:documentation": "Certifications of an organization"
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
	  OrganizationCertification: {
      type: "TypeOrganizationCertificationType",
      wsdlDefinition: {
        name: "OrganizationCertification",
        type: "OrganizationCertificationType",
        "xsd:annotation": {
          "xsd:documentation": "Certifications of an organization"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOrganizationCertification;
Modeler.register(ElementOrganizationCertification, "ElementOrganizationCertification");
