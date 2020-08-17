var Modeler = require("../Modeler.js");
var className = 'TypeFaultNotificationType';

var TypeFaultNotificationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  BusinessComponentID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BusinessComponentID",
        type: "IdentifierType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ReportingDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ReportingDateTime",
        type: "DateTimeType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CorrectiveAction: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:CorrectiveAction",
        type: "TextType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    FaultMessage: {
      type: "TypeFaultMessageType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FaultMessage",
        type: "FaultMessageType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FaultingService: {
      type: "TypeFaultingServiceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FaultingService",
        type: "FaultingServiceType",
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
	  BusinessComponentID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BusinessComponentID",
        type: "IdentifierType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ReportingDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ReportingDateTime",
        type: "DateTimeType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CorrectiveAction: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:CorrectiveAction",
        type: "TextType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    FaultMessage: {
      type: "TypeFaultMessageType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FaultMessage",
        type: "FaultMessageType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FaultingService: {
      type: "TypeFaultingServiceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FaultingService",
        type: "FaultingServiceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeFaultNotificationType;
Modeler.register(TypeFaultNotificationType, "TypeFaultNotificationType");
