var Modeler = require("../Modeler.js");
var className = 'TypeStopPaymentInstructionType';

var TypeStopPaymentInstructionType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RequestDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RequestDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Date when stop  payment request was placed"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ReasonCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ReasonCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Reason for requesting stop payment."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RequesterContact: {
      type: "TypeContactType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RequesterContact",
        type: "ContactType",
        "xsd:annotation": {
          "xsd:documentation": "Customer contact that requested stop payment"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Status: {
      type: "TypeStatusType",
      wsdlDefinition: {
        name: "WL5G3N2:Status",
        type: "StatusType",
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
	  RequestDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RequestDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Date when stop  payment request was placed"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ReasonCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ReasonCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Reason for requesting stop payment."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RequesterContact: {
      type: "TypeContactType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RequesterContact",
        type: "ContactType",
        "xsd:annotation": {
          "xsd:documentation": "Customer contact that requested stop payment"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Status: {
      type: "TypeStatusType",
      wsdlDefinition: {
        name: "WL5G3N2:Status",
        type: "StatusType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeStopPaymentInstructionType;
Modeler.register(TypeStopPaymentInstructionType, "TypeStopPaymentInstructionType");
