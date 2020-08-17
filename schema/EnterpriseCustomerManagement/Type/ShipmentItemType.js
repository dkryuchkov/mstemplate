var Modeler = require("../Modeler.js");
var className = 'TypeShipmentItemType';

var TypeShipmentItemType = function(json, parentObj) {
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
    Name: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Name",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Item name"
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
          "xsd:documentation": "Item Description"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ItemLotNumber: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ItemLotNumber",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Item Lot (only for lot ontrolled items). Deprecate in FP 2.5. Use the ShipmentItemLot instead."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OrderedQuantity: {
      type: "TypeQuantityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OrderedQuantity",
        type: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "Ordered Quantity"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    StagedQuantity: {
      type: "TypeQuantityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:StagedQuantity",
        type: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "The quantity ready to be shipped (being staged or already \nmoved out to the staging area where the carrier can pick up)."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShippedQuantity: {
      type: "TypeQuantityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ShippedQuantity",
        type: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "Quantity Shipped"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BackorderedQuantity: {
      type: "TypeQuantityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BackorderedQuantity",
        type: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "Backordered Quantity"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CanceledQuantity: {
      type: "TypeQuantityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CanceledQuantity",
        type: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "Canceled Quantity"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ItemNetWeight: {
      type: "TypeMeasureType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ItemNetWeight",
        type: "MeasureType",
        "xsd:annotation": {
          "xsd:documentation": "Item Net Weight"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ItemVolume: {
      type: "TypeMeasureType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ItemVolume",
        type: "MeasureType",
        "xsd:annotation": {
          "xsd:documentation": "Item Volume"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    HazardClassCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:HazardClassCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Hazard Class"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RequestedDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RequestedDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Requested Date"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PromisedDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PromisedDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Promised Date"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ContainerSealNumber: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ContainerSealNumber",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "ContainerSealNumber"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TrackingID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TrackingID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "TrackingID"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PackingInstruction: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PackingInstruction",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "PackingInstruction"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    EndingSerialNumber: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EndingSerialNumber",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Deprecate in FP2.5. Use the ShipmentItemInstanceRange instead."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    StartingSerialNumber: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:StartingSerialNumber",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Deprecate in FP2.5. Use the ShipmentItemInstanceRange instead."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ActualShipDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ActualShipDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "The DateTime on which the item (or order line item) was shipped."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SalesOrderReference: {
      type: "TypeSalesOrderReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SalesOrderReference",
        type: "SalesOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to Sales Order"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShipmentFulfillmentOrderSchedule: {
      type: "TypeShipmentFulfillmentOrderScheduleType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ShipmentFulfillmentOrderSchedule",
        type: "ShipmentFulfillmentOrderScheduleType",
        "xsd:annotation": {
          "xsd:documentation": "Business reference component for the FulfillmentOrderSchedule. It refers to the FulfillmentOrderSchedule this shipment item is fulfilling (i.e., this shipment item is for satisfying the referred to FulfillmentOrderSchedule)."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ItemReference: {
      type: "TypeItemReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ItemReference",
        type: "ItemReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the item that is being transported"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShipmentItemCharge: {
      type: "TypeShipmentItemChargeType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ShipmentItemCharge",
        type: "ShipmentItemChargeType",
        "xsd:annotation": {
          "xsd:documentation": "Shipment Charge at (unpacked) Line level"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PurchaseOrderReference: {
      type: "TypePurchaseOrderReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PurchaseOrderReference",
        type: "PurchaseOrderReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShipmentRequestOrderLineReference: {
      type: "TypeShipmentRequestOrderLineReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ShipmentRequestOrderLineReference",
        type: "ShipmentRequestOrderLineReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShipFromLocationReference: {
      type: "TypeLocationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ShipFromLocationReference",
        type: "LocationReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShipmentItemLot: {
      type: "TypeShipmentItemLotType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ShipmentItemLot",
        type: "ShipmentItemLotType",
        "xsd:annotation": {
          "xsd:documentation": "This component refers to the Item Lot, particularly the lot number, of this shipment item. It also reify attributes of the lot important for the shipment."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShipmentItemInstanceRange: {
      type: "TypeShipmentItemInstanceRangeType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ShipmentItemInstanceRange",
        type: "ShipmentItemInstanceRangeType",
        "xsd:annotation": {
          "xsd:documentation": "A range of serial numbers included in this shipment item. The serial numbers may be specified using multiple of this ShipmentItemInstanceRange's (multiples are used when ranges are not continuous) or many of ShipmentItemInstance's or combinations of both. The ShipmentItemInstanceRange should not be used to specified an individual serail number by using the same start and end number of leaving the end number blank as this can becomes ambiguous (element absent can mean don't touch and empty element can mean remove)."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ShipmentItemInstance: {
      type: "TypeShipmentItemInstanceType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ShipmentItemInstance",
        type: "ShipmentItemInstanceType",
        "xsd:annotation": {
          "xsd:documentation": "An individual serial number included in this shipment item. The serial numbers may be specified using multiple of this ShipmentItemInstanceRange's (when ranges are not continuous) or many of ShipmentItemInstance's or combinations of both."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ShipmentItemInstanceGenealogy: {
      type: "TypeShipmentItemInstanceGenealogyType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ShipmentItemInstanceGenealogy",
        type: "ShipmentItemInstanceGenealogyType",
        "xsd:annotation": {
          "xsd:documentation": "Geneology of a shipment item instance in this shipment"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomShipmentChargeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomShipmentChargeType",
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
    Name: {
      type: "TypeNameType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:Name",
        type: "NameType",
        "xsd:annotation": {
          "xsd:documentation": "Item name"
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
          "xsd:documentation": "Item Description"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ItemLotNumber: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ItemLotNumber",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Item Lot (only for lot ontrolled items). Deprecate in FP 2.5. Use the ShipmentItemLot instead."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OrderedQuantity: {
      type: "TypeQuantityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OrderedQuantity",
        type: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "Ordered Quantity"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    StagedQuantity: {
      type: "TypeQuantityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:StagedQuantity",
        type: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "The quantity ready to be shipped (being staged or already \nmoved out to the staging area where the carrier can pick up)."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShippedQuantity: {
      type: "TypeQuantityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ShippedQuantity",
        type: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "Quantity Shipped"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BackorderedQuantity: {
      type: "TypeQuantityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BackorderedQuantity",
        type: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "Backordered Quantity"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CanceledQuantity: {
      type: "TypeQuantityType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CanceledQuantity",
        type: "QuantityType",
        "xsd:annotation": {
          "xsd:documentation": "Canceled Quantity"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ItemNetWeight: {
      type: "TypeMeasureType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ItemNetWeight",
        type: "MeasureType",
        "xsd:annotation": {
          "xsd:documentation": "Item Net Weight"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ItemVolume: {
      type: "TypeMeasureType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ItemVolume",
        type: "MeasureType",
        "xsd:annotation": {
          "xsd:documentation": "Item Volume"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    HazardClassCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:HazardClassCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Hazard Class"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RequestedDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RequestedDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Requested Date"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PromisedDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PromisedDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Promised Date"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ContainerSealNumber: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ContainerSealNumber",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "ContainerSealNumber"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TrackingID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TrackingID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "TrackingID"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    PackingInstruction: {
      type: "TypeTextType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:PackingInstruction",
        type: "TextType",
        "xsd:annotation": {
          "xsd:documentation": "PackingInstruction"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    EndingSerialNumber: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EndingSerialNumber",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Deprecate in FP2.5. Use the ShipmentItemInstanceRange instead."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    StartingSerialNumber: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:StartingSerialNumber",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Deprecate in FP2.5. Use the ShipmentItemInstanceRange instead."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ActualShipDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ActualShipDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "The DateTime on which the item (or order line item) was shipped."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SalesOrderReference: {
      type: "TypeSalesOrderReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SalesOrderReference",
        type: "SalesOrderReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to Sales Order"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShipmentFulfillmentOrderSchedule: {
      type: "TypeShipmentFulfillmentOrderScheduleType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ShipmentFulfillmentOrderSchedule",
        type: "ShipmentFulfillmentOrderScheduleType",
        "xsd:annotation": {
          "xsd:documentation": "Business reference component for the FulfillmentOrderSchedule. It refers to the FulfillmentOrderSchedule this shipment item is fulfilling (i.e., this shipment item is for satisfying the referred to FulfillmentOrderSchedule)."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ItemReference: {
      type: "TypeItemReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ItemReference",
        type: "ItemReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to the item that is being transported"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShipmentItemCharge: {
      type: "TypeShipmentItemChargeType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ShipmentItemCharge",
        type: "ShipmentItemChargeType",
        "xsd:annotation": {
          "xsd:documentation": "Shipment Charge at (unpacked) Line level"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    PurchaseOrderReference: {
      type: "TypePurchaseOrderReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PurchaseOrderReference",
        type: "PurchaseOrderReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShipmentRequestOrderLineReference: {
      type: "TypeShipmentRequestOrderLineReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ShipmentRequestOrderLineReference",
        type: "ShipmentRequestOrderLineReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShipFromLocationReference: {
      type: "TypeLocationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ShipFromLocationReference",
        type: "LocationReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShipmentItemLot: {
      type: "TypeShipmentItemLotType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ShipmentItemLot",
        type: "ShipmentItemLotType",
        "xsd:annotation": {
          "xsd:documentation": "This component refers to the Item Lot, particularly the lot number, of this shipment item. It also reify attributes of the lot important for the shipment."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ShipmentItemInstanceRange: {
      type: "TypeShipmentItemInstanceRangeType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ShipmentItemInstanceRange",
        type: "ShipmentItemInstanceRangeType",
        "xsd:annotation": {
          "xsd:documentation": "A range of serial numbers included in this shipment item. The serial numbers may be specified using multiple of this ShipmentItemInstanceRange's (multiples are used when ranges are not continuous) or many of ShipmentItemInstance's or combinations of both. The ShipmentItemInstanceRange should not be used to specified an individual serail number by using the same start and end number of leaving the end number blank as this can becomes ambiguous (element absent can mean don't touch and empty element can mean remove)."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ShipmentItemInstance: {
      type: "TypeShipmentItemInstanceType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ShipmentItemInstance",
        type: "ShipmentItemInstanceType",
        "xsd:annotation": {
          "xsd:documentation": "An individual serial number included in this shipment item. The serial numbers may be specified using multiple of this ShipmentItemInstanceRange's (when ranges are not continuous) or many of ShipmentItemInstance's or combinations of both."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    ShipmentItemInstanceGenealogy: {
      type: "TypeShipmentItemInstanceGenealogyType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:ShipmentItemInstanceGenealogy",
        type: "ShipmentItemInstanceGenealogyType",
        "xsd:annotation": {
          "xsd:documentation": "Geneology of a shipment item instance in this shipment"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomShipmentChargeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomShipmentChargeType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeShipmentItemType;
Modeler.register(TypeShipmentItemType, "TypeShipmentItemType");
