var Modeler = require("../Modeler.js");
var className = 'ElementRootParentProvisioningOrderLineIdentification';

var ElementRootParentProvisioningOrderLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RootParentProvisioningOrderLineIdentification: {
      type: "TypeProvisioningOrderLineIdentificationType",
      wsdlDefinition: {
        name: "RootParentProvisioningOrderLineIdentification",
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
	  RootParentProvisioningOrderLineIdentification: {
      type: "TypeProvisioningOrderLineIdentificationType",
      wsdlDefinition: {
        name: "RootParentProvisioningOrderLineIdentification",
        type: "ProvisioningOrderLineIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRootParentProvisioningOrderLineIdentification;
Modeler.register(ElementRootParentProvisioningOrderLineIdentification, "ElementRootParentProvisioningOrderLineIdentification");
