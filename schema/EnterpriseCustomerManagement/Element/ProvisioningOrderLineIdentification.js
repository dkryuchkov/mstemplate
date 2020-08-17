var Modeler = require("../Modeler.js");
var className = 'ElementProvisioningOrderLineIdentification';

var ElementProvisioningOrderLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProvisioningOrderLineIdentification: {
      type: "TypeProvisioningOrderLineIdentificationType",
      wsdlDefinition: {
        name: "ProvisioningOrderLineIdentification",
        type: "ProvisioningOrderLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Provisioning Order line"
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
	  ProvisioningOrderLineIdentification: {
      type: "TypeProvisioningOrderLineIdentificationType",
      wsdlDefinition: {
        name: "ProvisioningOrderLineIdentification",
        type: "ProvisioningOrderLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Provisioning Order line"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProvisioningOrderLineIdentification;
Modeler.register(ElementProvisioningOrderLineIdentification, "ElementProvisioningOrderLineIdentification");
