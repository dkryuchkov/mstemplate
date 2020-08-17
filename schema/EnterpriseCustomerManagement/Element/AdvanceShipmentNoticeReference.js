var Modeler = require("../Modeler.js");
var className = 'ElementAdvanceShipmentNoticeReference';

var ElementAdvanceShipmentNoticeReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AdvanceShipmentNoticeReference: {
      type: "TypeAdvanceShipmentNoticeReferenceType",
      wsdlDefinition: {
        name: "AdvanceShipmentNoticeReference",
        type: "AdvanceShipmentNoticeReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A notice (ASN) sent by the vendor to the customer indicating what merchandise has been shipped."
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
	  AdvanceShipmentNoticeReference: {
      type: "TypeAdvanceShipmentNoticeReferenceType",
      wsdlDefinition: {
        name: "AdvanceShipmentNoticeReference",
        type: "AdvanceShipmentNoticeReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A notice (ASN) sent by the vendor to the customer indicating what merchandise has been shipped."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAdvanceShipmentNoticeReference;
Modeler.register(ElementAdvanceShipmentNoticeReference, "ElementAdvanceShipmentNoticeReference");
