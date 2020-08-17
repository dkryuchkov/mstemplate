var Modeler = require("../Modeler.js");
var className = 'ElementRootParentFulfillmentOrderLineIdentification';

var ElementRootParentFulfillmentOrderLineIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RootParentFulfillmentOrderLineIdentification: {
      type: "TypeFulfillmentOrderLineIdentificationType",
      wsdlDefinition: {
        name: "RootParentFulfillmentOrderLineIdentification",
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
	  RootParentFulfillmentOrderLineIdentification: {
      type: "TypeFulfillmentOrderLineIdentificationType",
      wsdlDefinition: {
        name: "RootParentFulfillmentOrderLineIdentification",
        type: "FulfillmentOrderLineIdentificationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRootParentFulfillmentOrderLineIdentification;
Modeler.register(ElementRootParentFulfillmentOrderLineIdentification, "ElementRootParentFulfillmentOrderLineIdentification");
