var Modeler = require("../Modeler.js");
var className = 'TypeCustomMarketingBundleFulfillmentOrderLineReferenceType';

var TypeCustomMarketingBundleFulfillmentOrderLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomMarketingBundleFulfillmentOrderLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomMarketingBundleFulfillmentOrderLineReferenceType",
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
	  CustomMarketingBundleFulfillmentOrderLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomMarketingBundleFulfillmentOrderLineReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomMarketingBundleFulfillmentOrderLineReferenceType;
Modeler.register(TypeCustomMarketingBundleFulfillmentOrderLineReferenceType, "TypeCustomMarketingBundleFulfillmentOrderLineReferenceType");
