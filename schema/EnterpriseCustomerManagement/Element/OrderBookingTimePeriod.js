var Modeler = require("../Modeler.js");
var className = 'ElementOrderBookingTimePeriod';

var ElementOrderBookingTimePeriod = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OrderBookingTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        name: "OrderBookingTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "The time period in which orders booked for the product are eligible for the promotion"
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
	  OrderBookingTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        name: "OrderBookingTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "The time period in which orders booked for the product are eligible for the promotion"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOrderBookingTimePeriod;
Modeler.register(ElementOrderBookingTimePeriod, "ElementOrderBookingTimePeriod");
