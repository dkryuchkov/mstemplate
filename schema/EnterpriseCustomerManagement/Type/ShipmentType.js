var Modeler = require("../Modeler.js");
var className = 'TypeShipmentType';

var TypeShipmentType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Name: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Name",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Name of the shipment"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Description: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Description",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Shipment Description"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ServiceLevelCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ServiceLevelCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "A generic code that specifies a particular type or quality of carrier delivery service to be used for transporting goods.  A generic service level code is often established by shippers to consolidate various equivalent, but differently named, carrier service levels for comparison when \"rate shopping\" for the lowest cost transportation provider"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ModeOfTransportationCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ModeOfTransportationCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identifier for Mode of transportation used"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DestinationCountryCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DestinationCountryCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Destination Country"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OriginCountryCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OriginCountryCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Origin Country"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    InitialPickupDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:InitialPickupDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date of intial pickup"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    UltimateDropOffDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:UltimateDropOffDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date of ultimate drop off"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EarliestPickUpDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EarliestPickUpDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date of Earliest Pick"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LatestPickUpDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LatestPickUpDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date of latest pickup"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EarliestDropOffDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EarliestDropOffDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date of earliest drop off"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LatestDropOffDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LatestDropOffDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date of latest drop off"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PointofStagingCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PointofStagingCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "PointofStagingCode"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FOBPointCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FOBPointCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "FOBPointCode"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PointOfLoadingCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PointOfLoadingCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "PointOfLoadingCode"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DockCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DockCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Customer Dock Code"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RoutingInstruction: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:RoutingInstruction",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "RoutingInstruction"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ShipmentInstruction: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ShipmentInstruction",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "ShippingInstruction"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    FreightTermCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FreightTermCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Freight Terms"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TotalFreightAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TotalFreightAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Total Freight Amount"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    VehicleNumber: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:VehicleNumber",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Vehicle Number"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PackingSlipNumber: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PackingSlipNumber",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Packing Slip Number"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    WaybillNumber: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WaybillNumber",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Waybill Number"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    GrossWeight: {
      type: "TypeMeasureType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:GrossWeight",
        type: "MeasureType",
        "xsd:annotation": {
          "xsd:documentation": "Shipment Gross Weight"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    NetWeight: {
      type: "TypeMeasureType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:NetWeight",
        type: "MeasureType",
        "xsd:annotation": {
          "xsd:documentation": "Shipment Net weight"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TareWeight: {
      type: "TypeMeasureType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TareWeight",
        type: "MeasureType",
        "xsd:annotation": {
          "xsd:documentation": "Shipment Tare weight"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShipmentVolume: {
      type: "TypeMeasureType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ShipmentVolume",
        type: "MeasureType",
        "xsd:annotation": {
          "xsd:documentation": "Shipment Volume"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShipUnitQuantity: {
      type: "TypeQuantityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ShipUnitQuantity",
        type: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "Total Shipment Unit Count"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    HazardousMaterialIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:HazardousMaterialIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if the shipment is Hazardous"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OwnershipChangeIndicator: {
      type: "TypeanyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OwnershipChangeIndicator",
        type: "xsd:anyType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if the transfer of goods from the supplier to the customer consittutes a change of ownership."
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
          "xsd:documentation": "Indicates manifest request cancellation status - whether Accepted or Rejected"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShipFromPartyReference: {
      type: "TypeShipFromPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ShipFromPartyReference",
        type: "ShipFromPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to Ship from party"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShipToPartyReference: {
      type: "TypeShipToPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ShipToPartyReference",
        type: "ShipToPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to Ship To Party"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CarrierPartyReference: {
      type: "TypeCarrierPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CarrierPartyReference",
        type: "CarrierPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Carrier Party that is transporting the shipment Plan"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BillOfLadingReference: {
      type: "TypeBillOfLadingReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BillOfLadingReference",
        type: "BillOfLadingReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShipmentItem: {
      type: "TypeShipmentItemType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ShipmentItem",
        type: "ShipmentItemType",
        "xsd:annotation": {
          "xsd:documentation": "Defines/holds the attributes of a unpacked item or items within a container. For e.g. an item is packed in a container or loose item."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ShipmentCharge: {
      type: "TypeShipmentChargeType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ShipmentCharge",
        type: "ShipmentChargeType",
        "xsd:annotation": {
          "xsd:documentation": "Defines/holds the attributes of charges for a Shipment or Unit or Container or Line in ASN. For example, charges belongs to the Shipment such as Freight Charge, Handling Charges, etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyReference: {
      type: "TypeCustomerPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CustomerPartyReference",
        type: "CustomerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Person or Organization to whom the Goods or Services are sold. A CustomerParty represents a persons or organizations which have a buying relationship with the organization that is defining gthe customer. A CustomerParty can have one or more Accounts with the selling organization, such as a personal account, business account, and so forth. An Account is created once a party makes a purchase or establishes a financial agreement with the deploying organization. The combination of a party and its account(s) is considered a customer"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SupplierPartyReference: {
      type: "TypeSupplierPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SupplierPartyReference",
        type: "SupplierPartyReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AuditHistory: {
      type: "TypeAuditHistoryType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AuditHistory",
        type: "AuditHistoryType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShipmentAttachment: {
      type: "TypeShipmentAttachmentType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ShipmentAttachment",
        type: "ShipmentAttachmentType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  Name: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Name",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Name of the shipment"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Description: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Description",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "Shipment Description"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ServiceLevelCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ServiceLevelCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "A generic code that specifies a particular type or quality of carrier delivery service to be used for transporting goods.  A generic service level code is often established by shippers to consolidate various equivalent, but differently named, carrier service levels for comparison when \"rate shopping\" for the lowest cost transportation provider"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ModeOfTransportationCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ModeOfTransportationCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identifier for Mode of transportation used"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DestinationCountryCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DestinationCountryCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Destination Country"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OriginCountryCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OriginCountryCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Origin Country"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    InitialPickupDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:InitialPickupDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date of intial pickup"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    UltimateDropOffDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:UltimateDropOffDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date of ultimate drop off"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EarliestPickUpDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EarliestPickUpDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date of Earliest Pick"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LatestPickUpDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LatestPickUpDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date of latest pickup"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EarliestDropOffDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EarliestDropOffDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date of earliest drop off"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LatestDropOffDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LatestDropOffDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Date of latest drop off"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PointofStagingCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PointofStagingCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "PointofStagingCode"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    FOBPointCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FOBPointCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "FOBPointCode"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PointOfLoadingCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PointOfLoadingCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "PointOfLoadingCode"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DockCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:DockCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Customer Dock Code"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RoutingInstruction: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:RoutingInstruction",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "RoutingInstruction"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ShipmentInstruction: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ShipmentInstruction",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "ShippingInstruction"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    FreightTermCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:FreightTermCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Freight Terms"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TotalFreightAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TotalFreightAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Total Freight Amount"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    VehicleNumber: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:VehicleNumber",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Vehicle Number"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PackingSlipNumber: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PackingSlipNumber",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Packing Slip Number"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    WaybillNumber: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WaybillNumber",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Waybill Number"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    GrossWeight: {
      type: "TypeMeasureType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:GrossWeight",
        type: "MeasureType",
        "xsd:annotation": {
          "xsd:documentation": "Shipment Gross Weight"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    NetWeight: {
      type: "TypeMeasureType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:NetWeight",
        type: "MeasureType",
        "xsd:annotation": {
          "xsd:documentation": "Shipment Net weight"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TareWeight: {
      type: "TypeMeasureType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TareWeight",
        type: "MeasureType",
        "xsd:annotation": {
          "xsd:documentation": "Shipment Tare weight"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShipmentVolume: {
      type: "TypeMeasureType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ShipmentVolume",
        type: "MeasureType",
        "xsd:annotation": {
          "xsd:documentation": "Shipment Volume"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShipUnitQuantity: {
      type: "TypeQuantityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ShipUnitQuantity",
        type: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "Total Shipment Unit Count"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    HazardousMaterialIndicator: {
      type: "TypeIndicatorType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:HazardousMaterialIndicator",
        type: "IndicatorType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if the shipment is Hazardous"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OwnershipChangeIndicator: {
      type: "TypeanyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OwnershipChangeIndicator",
        type: "xsd:anyType",
        "xsd:annotation": {
          "xsd:documentation": "Indicates if the transfer of goods from the supplier to the customer consittutes a change of ownership."
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
          "xsd:documentation": "Indicates manifest request cancellation status - whether Accepted or Rejected"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShipFromPartyReference: {
      type: "TypeShipFromPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ShipFromPartyReference",
        type: "ShipFromPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to Ship from party"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShipToPartyReference: {
      type: "TypeShipToPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ShipToPartyReference",
        type: "ShipToPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to Ship To Party"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CarrierPartyReference: {
      type: "TypeCarrierPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CarrierPartyReference",
        type: "CarrierPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Carrier Party that is transporting the shipment Plan"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BillOfLadingReference: {
      type: "TypeBillOfLadingReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BillOfLadingReference",
        type: "BillOfLadingReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShipmentItem: {
      type: "TypeShipmentItemType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ShipmentItem",
        type: "ShipmentItemType",
        "xsd:annotation": {
          "xsd:documentation": "Defines/holds the attributes of a unpacked item or items within a container. For e.g. an item is packed in a container or loose item."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ShipmentCharge: {
      type: "TypeShipmentChargeType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ShipmentCharge",
        type: "ShipmentChargeType",
        "xsd:annotation": {
          "xsd:documentation": "Defines/holds the attributes of charges for a Shipment or Unit or Container or Line in ASN. For example, charges belongs to the Shipment such as Freight Charge, Handling Charges, etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    CustomerPartyReference: {
      type: "TypeCustomerPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CustomerPartyReference",
        type: "CustomerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Person or Organization to whom the Goods or Services are sold. A CustomerParty represents a persons or organizations which have a buying relationship with the organization that is defining gthe customer. A CustomerParty can have one or more Accounts with the selling organization, such as a personal account, business account, and so forth. An Account is created once a party makes a purchase or establishes a financial agreement with the deploying organization. The combination of a party and its account(s) is considered a customer"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SupplierPartyReference: {
      type: "TypeSupplierPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SupplierPartyReference",
        type: "SupplierPartyReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    AuditHistory: {
      type: "TypeAuditHistoryType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:AuditHistory",
        type: "AuditHistoryType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShipmentAttachment: {
      type: "TypeShipmentAttachmentType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ShipmentAttachment",
        type: "ShipmentAttachmentType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeShipmentType;
Modeler.register(TypeShipmentType, "TypeShipmentType");
