var Modeler = require("../Modeler.js");
var className = 'ElementProcurementCard';

var ElementProcurementCard = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProcurementCard: {
      type: "TypeProcurementCardType",
      wsdlDefinition: {
        name: "ProcurementCard",
        type: "ProcurementCardType",
        "xsd:annotation": {
          "xsd:documentation": "A charge card used for the purchase of business-related goods and services"
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
	  ProcurementCard: {
      type: "TypeProcurementCardType",
      wsdlDefinition: {
        name: "ProcurementCard",
        type: "ProcurementCardType",
        "xsd:annotation": {
          "xsd:documentation": "A charge card used for the purchase of business-related goods and services"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProcurementCard;
Modeler.register(ElementProcurementCard, "ElementProcurementCard");
