var Modeler = require("../Modeler.js");
var className = 'TypeCustomOrganizationCertificationType';

var TypeCustomOrganizationCertificationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomOrganizationCertificationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomOrganizationCertificationType",
        attribute: false,
        type: "xsd:string"
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
	  CustomOrganizationCertificationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomOrganizationCertificationType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomOrganizationCertificationType;
Modeler.register(TypeCustomOrganizationCertificationType, "TypeCustomOrganizationCertificationType");
