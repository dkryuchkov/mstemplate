var Modeler = require("../Modeler.js");
var className = 'ElementProvisioningOrderIdentification';

var ElementProvisioningOrderIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProvisioningOrderIdentification: {
      type: "TypeProvisioningOrderIdentificationType",
      wsdlDefinition: {
        name: "ProvisioningOrderIdentification",
        type: "ProvisioningOrderIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Provisioning Order"
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
	  ProvisioningOrderIdentification: {
      type: "TypeProvisioningOrderIdentificationType",
      wsdlDefinition: {
        name: "ProvisioningOrderIdentification",
        type: "ProvisioningOrderIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Provisioning Order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProvisioningOrderIdentification;
Modeler.register(ElementProvisioningOrderIdentification, "ElementProvisioningOrderIdentification");
