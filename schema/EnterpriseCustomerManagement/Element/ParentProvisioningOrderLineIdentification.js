var Modeler = require("../Modeler.js");
var className = 'ElementParentProvisioningOrderLineIdentification';

var ElementParentProvisioningOrderLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ParentProvisioningOrderLineIdentification: {
      type: "TypeProvisioningOrderLineIdentificationType",
      wsdlDefinition: {
        name: "ParentProvisioningOrderLineIdentification",
        type: "ProvisioningOrderLineIdentificationType",
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
	  ParentProvisioningOrderLineIdentification: {
      type: "TypeProvisioningOrderLineIdentificationType",
      wsdlDefinition: {
        name: "ParentProvisioningOrderLineIdentification",
        type: "ProvisioningOrderLineIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementParentProvisioningOrderLineIdentification;
Modeler.register(ElementParentProvisioningOrderLineIdentification, "ElementParentProvisioningOrderLineIdentification");
