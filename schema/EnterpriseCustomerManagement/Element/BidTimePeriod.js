var Modeler = require("../Modeler.js");
var className = 'ElementBidTimePeriod';

var ElementBidTimePeriod = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BidTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        name: "BidTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "A period of time for which Bidding is allowed against an Auction or a Request for Quote"
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
	  BidTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        name: "BidTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "A period of time for which Bidding is allowed against an Auction or a Request for Quote"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementBidTimePeriod;
Modeler.register(ElementBidTimePeriod, "ElementBidTimePeriod");
