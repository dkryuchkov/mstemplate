var Modeler = require("../Modeler.js");
var className = 'TypeEBMTrackingType';

var TypeEBMTrackingType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SequenceNumber: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SequenceNumber",
        type: "NumericType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ExecutionUnitID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ExecutionUnitID",
        type: "IdentifierType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ExecutionUnitName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ExecutionUnitName",
        type: "NameType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ImplementationCode: {
      type: "TypeImplementationCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ImplementationCode",
        type: "ImplementationCodeType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ActivityDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ActivityDateTime",
        type: "DateTimeType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IntermediateMessageHop: {
      type: "TypeIntermediateMessageHopType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IntermediateMessageHop",
        type: "IntermediateMessageHopType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomEBMTrackingType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomEBMTrackingType",
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
	  SequenceNumber: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SequenceNumber",
        type: "NumericType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ExecutionUnitID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ExecutionUnitID",
        type: "IdentifierType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ExecutionUnitName: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ExecutionUnitName",
        type: "NameType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ImplementationCode: {
      type: "TypeImplementationCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ImplementationCode",
        type: "ImplementationCodeType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ActivityDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ActivityDateTime",
        type: "DateTimeType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    IntermediateMessageHop: {
      type: "TypeIntermediateMessageHopType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:IntermediateMessageHop",
        type: "IntermediateMessageHopType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomEBMTrackingType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomEBMTrackingType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeEBMTrackingType;
Modeler.register(TypeEBMTrackingType, "TypeEBMTrackingType");
