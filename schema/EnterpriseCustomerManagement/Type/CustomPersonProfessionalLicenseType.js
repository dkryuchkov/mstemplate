var Modeler = require("../Modeler.js");
var className = 'TypeCustomPersonProfessionalLicenseType';

var TypeCustomPersonProfessionalLicenseType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPersonProfessionalLicenseType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPersonProfessionalLicenseType",
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
	  CustomPersonProfessionalLicenseType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPersonProfessionalLicenseType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPersonProfessionalLicenseType;
Modeler.register(TypeCustomPersonProfessionalLicenseType, "TypeCustomPersonProfessionalLicenseType");
