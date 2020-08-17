var Modeler = require("../Modeler.js");
var className = 'ElementProvisioningOrderReference';

var ElementProvisioningOrderReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProvisioningOrderReference: {
      type: "TypeProvisioningOrderReferenceType",
      wsdlDefinition: {
        name: "ProvisioningOrderReference",
        type: "ProvisioningOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Provisioning Order"
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
	  ProvisioningOrderReference: {
      type: "TypeProvisioningOrderReferenceType",
      wsdlDefinition: {
        name: "ProvisioningOrderReference",
        type: "ProvisioningOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a Provisioning Order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProvisioningOrderReference;
Modeler.register(ElementProvisioningOrderReference, "ElementProvisioningOrderReference");
