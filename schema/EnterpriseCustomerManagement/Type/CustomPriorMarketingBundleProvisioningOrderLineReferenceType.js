var Modeler = require("../Modeler.js");
var className = 'TypeCustomPriorMarketingBundleProvisioningOrderLineReferenceType';

var TypeCustomPriorMarketingBundleProvisioningOrderLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPriorMarketingBundleProvisioningOrderLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPriorMarketingBundleProvisioningOrderLineReferenceType",
        attribute: false,
        type: "xsd:string"
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
	  CustomPriorMarketingBundleProvisioningOrderLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPriorMarketingBundleProvisioningOrderLineReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPriorMarketingBundleProvisioningOrderLineReferenceType;
Modeler.register(TypeCustomPriorMarketingBundleProvisioningOrderLineReferenceType, "TypeCustomPriorMarketingBundleProvisioningOrderLineReferenceType");
