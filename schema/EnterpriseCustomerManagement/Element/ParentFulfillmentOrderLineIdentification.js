var Modeler = require("../Modeler.js");
var className = 'ElementParentFulfillmentOrderLineIdentification';

var ElementParentFulfillmentOrderLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ParentFulfillmentOrderLineIdentification: {
      type: "TypeFulfillmentOrderLineIdentificationType",
      wsdlDefinition: {
        name: "ParentFulfillmentOrderLineIdentification",
        type: "FulfillmentOrderLineIdentificationType",
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
	  ParentFulfillmentOrderLineIdentification: {
      type: "TypeFulfillmentOrderLineIdentificationType",
      wsdlDefinition: {
        name: "ParentFulfillmentOrderLineIdentification",
        type: "FulfillmentOrderLineIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementParentFulfillmentOrderLineIdentification;
Modeler.register(ElementParentFulfillmentOrderLineIdentification, "ElementParentFulfillmentOrderLineIdentification");
