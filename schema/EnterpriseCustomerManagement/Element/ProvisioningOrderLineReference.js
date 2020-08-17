var Modeler = require("../Modeler.js");
var className = 'ElementProvisioningOrderLineReference';

var ElementProvisioningOrderLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProvisioningOrderLineReference: {
      type: "TypeProvisioningOrderLineReferenceType",
      wsdlDefinition: {
        name: "ProvisioningOrderLineReference",
        type: "ProvisioningOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a line on a provisioning order"
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
	  ProvisioningOrderLineReference: {
      type: "TypeProvisioningOrderLineReferenceType",
      wsdlDefinition: {
        name: "ProvisioningOrderLineReference",
        type: "ProvisioningOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a line on a provisioning order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProvisioningOrderLineReference;
Modeler.register(ElementProvisioningOrderLineReference, "ElementProvisioningOrderLineReference");
