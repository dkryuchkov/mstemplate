var Modeler = require("../Modeler.js");
var className = 'ElementOriginalProvisioningOrderLineReference';

var ElementOriginalProvisioningOrderLineReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OriginalProvisioningOrderLineReference: {
      type: "TypeProvisioningOrderLineReferenceType",
      wsdlDefinition: {
        name: "OriginalProvisioningOrderLineReference",
        type: "ProvisioningOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Provisiong Order Line of a base Order"
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
	  OriginalProvisioningOrderLineReference: {
      type: "TypeProvisioningOrderLineReferenceType",
      wsdlDefinition: {
        name: "OriginalProvisioningOrderLineReference",
        type: "ProvisioningOrderLineReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a Provisiong Order Line of a base Order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOriginalProvisioningOrderLineReference;
Modeler.register(ElementOriginalProvisioningOrderLineReference, "ElementOriginalProvisioningOrderLineReference");
