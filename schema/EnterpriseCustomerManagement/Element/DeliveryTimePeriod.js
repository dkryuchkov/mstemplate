var Modeler = require("../Modeler.js");
var className = 'ElementDeliveryTimePeriod';

var ElementDeliveryTimePeriod = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DeliveryTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        name: "DeliveryTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "The time period in which requested arrival dates (deliveries) made for the product  are eligible for the promotion"
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
	  DeliveryTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        name: "DeliveryTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "The time period in which requested arrival dates (deliveries) made for the product  are eligible for the promotion"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeliveryTimePeriod;
Modeler.register(ElementDeliveryTimePeriod, "ElementDeliveryTimePeriod");
