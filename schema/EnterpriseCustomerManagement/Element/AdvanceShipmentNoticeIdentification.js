var Modeler = require("../Modeler.js");
var className = 'ElementAdvanceShipmentNoticeIdentification';

var ElementAdvanceShipmentNoticeIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AdvanceShipmentNoticeIdentification: {
      type: "TypeAdvanceShipmentNoticeIdentificationType",
      wsdlDefinition: {
        name: "AdvanceShipmentNoticeIdentification",
        type: "AdvanceShipmentNoticeIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of an Advance Shipment Notification"
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
	  AdvanceShipmentNoticeIdentification: {
      type: "TypeAdvanceShipmentNoticeIdentificationType",
      wsdlDefinition: {
        name: "AdvanceShipmentNoticeIdentification",
        type: "AdvanceShipmentNoticeIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique Identification of an Advance Shipment Notification"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAdvanceShipmentNoticeIdentification;
Modeler.register(ElementAdvanceShipmentNoticeIdentification, "ElementAdvanceShipmentNoticeIdentification");
