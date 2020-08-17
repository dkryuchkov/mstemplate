var Modeler = require("../Modeler.js");
var className = 'ElementRelatedProvisioningOrderLineIdentification';

var ElementRelatedProvisioningOrderLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RelatedProvisioningOrderLineIdentification: {
      type: "TypeProvisioningOrderLineIdentificationType",
      wsdlDefinition: {
        name: "RelatedProvisioningOrderLineIdentification",
        type: "ProvisioningOrderLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Related Provisioning Order line"
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
	  RelatedProvisioningOrderLineIdentification: {
      type: "TypeProvisioningOrderLineIdentificationType",
      wsdlDefinition: {
        name: "RelatedProvisioningOrderLineIdentification",
        type: "ProvisioningOrderLineIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Related Provisioning Order line"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRelatedProvisioningOrderLineIdentification;
Modeler.register(ElementRelatedProvisioningOrderLineIdentification, "ElementRelatedProvisioningOrderLineIdentification");
