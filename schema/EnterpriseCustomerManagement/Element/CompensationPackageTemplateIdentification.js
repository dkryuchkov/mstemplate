var Modeler = require("../Modeler.js");
var className = 'ElementCompensationPackageTemplateIdentification';

var ElementCompensationPackageTemplateIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CompensationPackageTemplateIdentification: {
      type: "TypeCompensationPackageTemplateIdentificationType",
      wsdlDefinition: {
        name: "CompensationPackageTemplateIdentification",
        type: "CompensationPackageTemplateIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Compensation Package Template object"
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
	  CompensationPackageTemplateIdentification: {
      type: "TypeCompensationPackageTemplateIdentificationType",
      wsdlDefinition: {
        name: "CompensationPackageTemplateIdentification",
        type: "CompensationPackageTemplateIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Compensation Package Template object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCompensationPackageTemplateIdentification;
Modeler.register(ElementCompensationPackageTemplateIdentification, "ElementCompensationPackageTemplateIdentification");
