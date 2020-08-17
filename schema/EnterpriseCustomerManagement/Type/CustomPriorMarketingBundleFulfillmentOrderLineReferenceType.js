var Modeler = require("../Modeler.js");
var className = 'TypeCustomPriorMarketingBundleFulfillmentOrderLineReferenceType';

var TypeCustomPriorMarketingBundleFulfillmentOrderLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPriorMarketingBundleFulfillmentOrderLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPriorMarketingBundleFulfillmentOrderLineReferenceType",
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
	  CustomPriorMarketingBundleFulfillmentOrderLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPriorMarketingBundleFulfillmentOrderLineReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPriorMarketingBundleFulfillmentOrderLineReferenceType;
Modeler.register(TypeCustomPriorMarketingBundleFulfillmentOrderLineReferenceType, "TypeCustomPriorMarketingBundleFulfillmentOrderLineReferenceType");
