var Modeler = require("../Modeler.js");
var className = 'TypeContactAddressCommunicationType';

var TypeContactAddressCommunicationType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PreferredMediaTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PreferredMediaTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "A preferred media type to be communicated to the address such as tape, disk, DVD, printed etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PreferredMediaFormatCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PreferredMediaFormatCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "A preferred media format for the communication address. Possible value could be table, document, XML etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SeasonalIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SeasonalIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if the contact seasonally occupies this contact address. This is used, for example, in marketing campaign or billing statement purpose. The marketing application will not send any marketing material to the address during off-season period. Similarly, billing application will not send a statement to this address during the off-season period."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SeasonalEffectivePeriod: {
      type: "TypeSeasonalEffectivePeriodType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SeasonalEffectivePeriod",
        type: "SeasonalEffectivePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "Yearly recurring effective period indicating when this particular contact address is effective for each year (if the contact address is a seasonal one)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AddressCommunication: {
      type: "TypeAddressCommunicationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AddressCommunication",
        type: "AddressCommunicationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Status: {
      type: "TypeStatusType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Status",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "Status of the communication point. Example values are Active, Inactive, Delete, Do Not Call."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomContactAddressCommunicationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomContactAddressCommunicationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    actionCode: {
      type: "TypeActionCodeType",
      wsdlDefinition: {
        name: "actionCode",
        type: "ActionCodeType",
        attribute: true
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
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PreferredMediaTypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PreferredMediaTypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "A preferred media type to be communicated to the address such as tape, disk, DVD, printed etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PreferredMediaFormatCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PreferredMediaFormatCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "A preferred media format for the communication address. Possible value could be table, document, XML etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SeasonalIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SeasonalIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if the contact seasonally occupies this contact address. This is used, for example, in marketing campaign or billing statement purpose. The marketing application will not send any marketing material to the address during off-season period. Similarly, billing application will not send a statement to this address during the off-season period."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SeasonalEffectivePeriod: {
      type: "TypeSeasonalEffectivePeriodType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SeasonalEffectivePeriod",
        type: "SeasonalEffectivePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "Yearly recurring effective period indicating when this particular contact address is effective for each year (if the contact address is a seasonal one)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AddressCommunication: {
      type: "TypeAddressCommunicationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AddressCommunication",
        type: "AddressCommunicationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Status: {
      type: "TypeStatusType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Status",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "Status of the communication point. Example values are Active, Inactive, Delete, Do Not Call."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomContactAddressCommunicationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomContactAddressCommunicationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    actionCode: {
      type: "TypeActionCodeType",
      wsdlDefinition: {
        name: "actionCode",
        type: "ActionCodeType",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeContactAddressCommunicationType;
Modeler.register(TypeContactAddressCommunicationType, "TypeContactAddressCommunicationType");
