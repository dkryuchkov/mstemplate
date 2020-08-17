var Modeler = require("../Modeler.js");
var className = 'ElementInstalledProductIdentification';

var ElementInstalledProductIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  InstalledProductIdentification: {
      type: "TypeInstalledProductIdentificationType",
      wsdlDefinition: {
        name: "InstalledProductIdentification",
        type: "InstalledProductIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of an Installed Product"
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
	  InstalledProductIdentification: {
      type: "TypeInstalledProductIdentificationType",
      wsdlDefinition: {
        name: "InstalledProductIdentification",
        type: "InstalledProductIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of an Installed Product"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementInstalledProductIdentification;
Modeler.register(ElementInstalledProductIdentification, "ElementInstalledProductIdentification");
