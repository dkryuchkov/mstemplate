var Modeler = require("../Modeler.js");
var className = 'TypeCustomerPartyShippingProfileType';

var TypeCustomerPartyShippingProfileType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Identification: {
      type: "TypeIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Identification",
        type: "IdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Identification of the Shipping Profile"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Description: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:Description",
        type: "WL5G3N2:TextType",
        "xsd:annotation": {
          "xsd:documentation": "Description for this Shipping Profile"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PreferredIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PreferredIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether this is the Primary Billing Profile for this Customer Party"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ModeOfTransportCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:ModeOfTransportCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Mode of Transportation"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ServiceLevelCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:ServiceLevelCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Transportation Service Level"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FOBPointCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:FOBPointCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Customer's preferred FOB point. FOB stands for the point in a shipment at which title of the goods is transferred. Examples include, FOB delivered (the title changes hands at the point of delivery), FOB Destination"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FreightTermCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:FreightTermCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Customer's preferred Freight Terms Code"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SortPriorityCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:SortPriorityCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Customer's preferred Sort Priority Code"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShippingNetworkCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:ShippingNetworkCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Customer's preferred Distribution Network Code - Predefined shipping network preferred"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DocumentLanguageCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:DocumentLanguageCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Language for shipping documents"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShipSetIncludedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:ShipSetIncludedIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if shipment lines should automatically be included in ship sets."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ArrivalSetIncludedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:ArrivalSetIncludedIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if shipment lines should automatically be included in arrival sets."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PartialOrderShipmentAllowedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PartialOrderShipmentAllowedIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the customer accepts partial order shipments."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PartialOrderLineShipmentAllowedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PartialOrderLineShipmentAllowedIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the customer accepts partial line shipments."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PartialScheduleShipmentAllowedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PartialScheduleShipmentAllowedIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the customer accepts partial schedule shipments. This is a Demand fulfillment option"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EarlyShipmentAllowedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:EarlyShipmentAllowedIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the customer accepts shipments prior to requested date. This is a Just In Time Parameter"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BackOrderCancelIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:BackOrderCancelIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether Back Orders for this customer should automatically be cancelled. This is a Demand fulfillment option"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OverPickingAllowedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:OverPickingAllowedIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether overpicking is allowed when picking order."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    StagedDateControlIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:StagedDateControlIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether customer maintains staged date information about the item"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ContainerControlIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:ContainerControlIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether customer maintains Container information about the item"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LotControlIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:LotControlIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether customer maintains Lot information about the item"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SerialControlIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:SerialControlIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether customer maintains Serial information about the item"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ScheduleDatePushIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:ScheduleDatePushIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if the group schedule date can automatically be pushed."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TransportationMethodRequiredIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:TransportationMethodRequiredIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether a transportation method is required for this customer on the ASN"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RoutingRequiredIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:RoutingRequiredIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether a transportation routing is required for this customer on the ASN"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PackagingCodeRequiredIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PackagingCodeRequiredIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether a packaging code is required for this customer on the ASN"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    WeightCodeRequiredIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:WeightCodeRequiredIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether a weight code is required for this customer on the ASN"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    VMIAllowedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:VMIAllowedIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether Customer allows VMI shipments"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EffectiveTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EffectiveTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "Effective Period for this Shipping Profile"
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
        minOccurs: "0",
        name: "WL5G3N2:Status",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "Status as of Effective Date"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Note: {
      type: "TypeNoteType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Note",
        type: "NoteType",
        "xsd:annotation": {
          "xsd:documentation": "Note"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    DeliveryDurationTolerance: {
      type: "TypeDurationToleranceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DeliveryDurationTolerance",
        type: "DurationToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "Shipment delivery tolerance as compared to the requested ship date : Just In Time Parameter"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShipmentTolerance: {
      type: "TypeShipmentToleranceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ShipmentTolerance",
        type: "ShipmentToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "Percentage tolerance for over and under shipment"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ReturnPercentTolerance: {
      type: "TypePercentToleranceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ReturnPercentTolerance",
        type: "PercentToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "Percentage tolerance for over and under return"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCustomerPartyShippingProfileType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Custom",
        type: "corecustomerpartycust:CustomCustomerPartyShippingProfileType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    actionCode: {
      type: "TypeActionCodeType",
      wsdlDefinition: {
        name: "actionCode",
        type: "WL5G3N2:ActionCodeType",
        use: "optional",
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
        "xsd:annotation": {
          "xsd:documentation": "Identification of the Shipping Profile"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Description: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N1:Description",
        type: "WL5G3N2:TextType",
        "xsd:annotation": {
          "xsd:documentation": "Description for this Shipping Profile"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PreferredIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PreferredIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether this is the Primary Billing Profile for this Customer Party"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ModeOfTransportCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:ModeOfTransportCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Mode of Transportation"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ServiceLevelCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:ServiceLevelCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Transportation Service Level"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FOBPointCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:FOBPointCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Customer's preferred FOB point. FOB stands for the point in a shipment at which title of the goods is transferred. Examples include, FOB delivered (the title changes hands at the point of delivery), FOB Destination"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FreightTermCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:FreightTermCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Customer's preferred Freight Terms Code"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SortPriorityCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:SortPriorityCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Customer's preferred Sort Priority Code"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShippingNetworkCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:ShippingNetworkCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Customer's preferred Distribution Network Code - Predefined shipping network preferred"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DocumentLanguageCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:DocumentLanguageCode",
        type: "WL5G3N2:CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Language for shipping documents"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShipSetIncludedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:ShipSetIncludedIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if shipment lines should automatically be included in ship sets."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ArrivalSetIncludedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:ArrivalSetIncludedIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if shipment lines should automatically be included in arrival sets."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PartialOrderShipmentAllowedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PartialOrderShipmentAllowedIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the customer accepts partial order shipments."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PartialOrderLineShipmentAllowedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PartialOrderLineShipmentAllowedIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the customer accepts partial line shipments."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PartialScheduleShipmentAllowedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PartialScheduleShipmentAllowedIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the customer accepts partial schedule shipments. This is a Demand fulfillment option"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EarlyShipmentAllowedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:EarlyShipmentAllowedIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether the customer accepts shipments prior to requested date. This is a Just In Time Parameter"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BackOrderCancelIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:BackOrderCancelIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether Back Orders for this customer should automatically be cancelled. This is a Demand fulfillment option"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OverPickingAllowedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:OverPickingAllowedIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether overpicking is allowed when picking order."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    StagedDateControlIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:StagedDateControlIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether customer maintains staged date information about the item"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ContainerControlIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:ContainerControlIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether customer maintains Container information about the item"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LotControlIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:LotControlIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether customer maintains Lot information about the item"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SerialControlIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:SerialControlIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether customer maintains Serial information about the item"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ScheduleDatePushIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:ScheduleDatePushIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if the group schedule date can automatically be pushed."
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TransportationMethodRequiredIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:TransportationMethodRequiredIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether a transportation method is required for this customer on the ASN"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RoutingRequiredIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:RoutingRequiredIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether a transportation routing is required for this customer on the ASN"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PackagingCodeRequiredIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:PackagingCodeRequiredIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether a packaging code is required for this customer on the ASN"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    WeightCodeRequiredIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:WeightCodeRequiredIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether a weight code is required for this customer on the ASN"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    VMIAllowedIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:VMIAllowedIndicator",
        type: "WL5G3N2:IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates whether Customer allows VMI shipments"
        },
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EffectiveTimePeriod: {
      type: "TypeTimePeriodType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EffectiveTimePeriod",
        type: "TimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "Effective Period for this Shipping Profile"
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
        minOccurs: "0",
        name: "WL5G3N2:Status",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "Status as of Effective Date"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Note: {
      type: "TypeNoteType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Note",
        type: "NoteType",
        "xsd:annotation": {
          "xsd:documentation": "Note"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    DeliveryDurationTolerance: {
      type: "TypeDurationToleranceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DeliveryDurationTolerance",
        type: "DurationToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "Shipment delivery tolerance as compared to the requested ship date : Just In Time Parameter"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShipmentTolerance: {
      type: "TypeShipmentToleranceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ShipmentTolerance",
        type: "ShipmentToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "Percentage tolerance for over and under shipment"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ReturnPercentTolerance: {
      type: "TypePercentToleranceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ReturnPercentTolerance",
        type: "PercentToleranceType",
        "xsd:annotation": {
          "xsd:documentation": "Percentage tolerance for over and under return"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCustomerPartyShippingProfileType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N1:Custom",
        type: "corecustomerpartycust:CustomCustomerPartyShippingProfileType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    actionCode: {
      type: "TypeActionCodeType",
      wsdlDefinition: {
        name: "actionCode",
        type: "WL5G3N2:ActionCodeType",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomerPartyShippingProfileType;
Modeler.register(TypeCustomerPartyShippingProfileType, "TypeCustomerPartyShippingProfileType");
