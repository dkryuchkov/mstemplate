var Modeler = require("../Modeler.js");
var className = 'ElementParentProvisioningOrderReference';

var ElementParentProvisioningOrderReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ParentProvisioningOrderReference: {
      type: "TypeProvisioningOrderReferenceType",
      wsdlDefinition: {
        name: "ParentProvisioningOrderReference",
        type: "ProvisioningOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a parent provisioning order"
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
	  ParentProvisioningOrderReference: {
      type: "TypeProvisioningOrderReferenceType",
      wsdlDefinition: {
        name: "ParentProvisioningOrderReference",
        type: "ProvisioningOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a parent provisioning order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementParentProvisioningOrderReference;
Modeler.register(ElementParentProvisioningOrderReference, "ElementParentProvisioningOrderReference");
