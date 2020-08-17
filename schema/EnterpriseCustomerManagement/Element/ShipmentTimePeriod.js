var Modeler = require("../Modeler.js");
var className = 'ElementShipmentTimePeriod';

var ElementShipmentTimePeriod = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ShipmentTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        name: "ShipmentTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "The time period in which shipments made for the product  are eligible for the promotion"
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
	  ShipmentTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        name: "ShipmentTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "The time period in which shipments made for the product  are eligible for the promotion"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementShipmentTimePeriod;
Modeler.register(ElementShipmentTimePeriod, "ElementShipmentTimePeriod");
