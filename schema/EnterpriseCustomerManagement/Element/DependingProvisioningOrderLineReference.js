var Modeler = require("../Modeler.js");
var className = 'ElementDependingProvisioningOrderLineReference';

var ElementDependingProvisioningOrderLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DependingProvisioningOrderLineReference: {
      type: "TypeProvisioningOrderLineReferenceType",
      wsdlDefinition: {
        name: "DependingProvisioningOrderLineReference",
        type: "ProvisioningOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Provisiong Order Line of another Order on which this Line depends on"
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
	  DependingProvisioningOrderLineReference: {
      type: "TypeProvisioningOrderLineReferenceType",
      wsdlDefinition: {
        name: "DependingProvisioningOrderLineReference",
        type: "ProvisioningOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Provisiong Order Line of another Order on which this Line depends on"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDependingProvisioningOrderLineReference;
Modeler.register(ElementDependingProvisioningOrderLineReference, "ElementDependingProvisioningOrderLineReference");
