var Modeler = require("../Modeler.js");
var className = 'TypeCustomMarketingBundleProvisioningOrderLineReferenceType';

var TypeCustomMarketingBundleProvisioningOrderLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomMarketingBundleProvisioningOrderLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomMarketingBundleProvisioningOrderLineReferenceType",
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
	  CustomMarketingBundleProvisioningOrderLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomMarketingBundleProvisioningOrderLineReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomMarketingBundleProvisioningOrderLineReferenceType;
Modeler.register(TypeCustomMarketingBundleProvisioningOrderLineReferenceType, "TypeCustomMarketingBundleProvisioningOrderLineReferenceType");
