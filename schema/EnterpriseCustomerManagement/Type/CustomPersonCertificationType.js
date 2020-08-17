var Modeler = require("../Modeler.js");
var className = 'TypeCustomPersonCertificationType';

var TypeCustomPersonCertificationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPersonCertificationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPersonCertificationType",
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
	  CustomPersonCertificationType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPersonCertificationType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPersonCertificationType;
Modeler.register(TypeCustomPersonCertificationType, "TypeCustomPersonCertificationType");
