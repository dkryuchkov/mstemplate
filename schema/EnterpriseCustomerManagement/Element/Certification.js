var Modeler = require("../Modeler.js");
var className = 'ElementCertification';

var ElementCertification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Certification: {
      type: "TypeCertificationType",
      wsdlDefinition: {
        name: "Certification",
        type: "CertificationType",
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
	  Certification: {
      type: "TypeCertificationType",
      wsdlDefinition: {
        name: "Certification",
        type: "CertificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCertification;
Modeler.register(ElementCertification, "ElementCertification");
