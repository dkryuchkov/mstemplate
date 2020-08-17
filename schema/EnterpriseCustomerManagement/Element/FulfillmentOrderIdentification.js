var Modeler = require("../Modeler.js");
var className = 'ElementFulfillmentOrderIdentification';

var ElementFulfillmentOrderIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FulfillmentOrderIdentification: {
      type: "TypeFulfillmentOrderIdentificationType",
      wsdlDefinition: {
        name: "FulfillmentOrderIdentification",
        type: "FulfillmentOrderIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Fulfillment Order"
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
	  FulfillmentOrderIdentification: {
      type: "TypeFulfillmentOrderIdentificationType",
      wsdlDefinition: {
        name: "FulfillmentOrderIdentification",
        type: "FulfillmentOrderIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Fulfillment Order"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFulfillmentOrderIdentification;
Modeler.register(ElementFulfillmentOrderIdentification, "ElementFulfillmentOrderIdentification");
