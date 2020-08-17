var Modeler = require("../Modeler.js");
var className = 'TypePrivacyPreferenceType';

var TypePrivacyPreferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PrivacyPreferenceStatus: {
      type: "TypeStatusType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PrivacyPreferenceStatus",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "Status for the privacy setting e.g. OUT (i.e., don't share), IN (i.e., share), PEND (i.e., pending or not yet decided) etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SystemDefaultIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SystemDefaultIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the system defaulted the sharing preference or not. If not, the customer elected the setting"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CommunicationChannelCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CommunicationChannelCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Communication channel used by the customer to elect the sharing preference (e.g., phone, written etc.)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RecordingSystemTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RecordingSystemTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The type of system that recorded the sharing preference (e.g., IVR, Call Center etc.)"
        },
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
	  PrivacyPreferenceStatus: {
      type: "TypeStatusType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PrivacyPreferenceStatus",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "Status for the privacy setting e.g. OUT (i.e., don't share), IN (i.e., share), PEND (i.e., pending or not yet decided) etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SystemDefaultIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SystemDefaultIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the system defaulted the sharing preference or not. If not, the customer elected the setting"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CommunicationChannelCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CommunicationChannelCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Communication channel used by the customer to elect the sharing preference (e.g., phone, written etc.)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RecordingSystemTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RecordingSystemTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "The type of system that recorded the sharing preference (e.g., IVR, Call Center etc.)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePrivacyPreferenceType;
Modeler.register(TypePrivacyPreferenceType, "TypePrivacyPreferenceType");
