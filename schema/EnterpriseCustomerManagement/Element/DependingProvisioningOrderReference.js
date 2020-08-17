var Modeler = require("../Modeler.js");
var className = 'ElementDependingProvisioningOrderReference';

var ElementDependingProvisioningOrderReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DependingProvisioningOrderReference: {
      type: "TypeProvisioningOrderReferenceType",
      wsdlDefinition: {
        name: "DependingProvisioningOrderReference",
        type: "ProvisioningOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the a previous Provisioning Order"
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
	  DependingProvisioningOrderReference: {
      type: "TypeProvisioningOrderReferenceType",
      wsdlDefinition: {
        name: "DependingProvisioningOrderReference",
        type: "ProvisioningOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the a previous Provisioning Order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDependingProvisioningOrderReference;
Modeler.register(ElementDependingProvisioningOrderReference, "ElementDependingProvisioningOrderReference");
