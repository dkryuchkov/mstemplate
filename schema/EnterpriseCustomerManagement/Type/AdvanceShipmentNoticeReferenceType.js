var Modeler = require("../Modeler.js");
var className = 'TypeAdvanceShipmentNoticeReferenceType';

var TypeAdvanceShipmentNoticeReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AdvanceShipmentNoticeIdentification: {
      type: "TypeAdvanceShipmentNoticeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AdvanceShipmentNoticeIdentification",
        type: "AdvanceShipmentNoticeIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomAdvanceShipmentNoticeReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomAdvanceShipmentNoticeReferenceType",
        attribute: false,
        ns: "WL5G3N2"
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
        minOccurs: "0",
        name: "WL5G3N2:AdvanceShipmentNoticeIdentification",
        type: "AdvanceShipmentNoticeIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomAdvanceShipmentNoticeReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomAdvanceShipmentNoticeReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeAdvanceShipmentNoticeReferenceType;
Modeler.register(TypeAdvanceShipmentNoticeReferenceType, "TypeAdvanceShipmentNoticeReferenceType");
