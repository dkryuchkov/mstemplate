var Modeler = require("../Modeler.js");
var className = 'TypeShipmentItemLotType';

var TypeShipmentItemLotType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ItemLotReference: {
      type: "TypeItemLotReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ItemLotReference",
        type: "ItemLotReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ParentItemLotReference: {
      type: "TypeItemLotReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ParentItemLotReference",
        type: "ItemLotReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ExpirationDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ExpirationDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Lot expiration date."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RetestDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RetestDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Retest date and time."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BestByDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BestByDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "The date on or before which the lot or sublot is best used."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SellByDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SellByDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "The date to have the product sold by."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreationDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CreationDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Lot creation date and time"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomShipmentItemLotType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomShipmentItemLotType",
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
	  ItemLotReference: {
      type: "TypeItemLotReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ItemLotReference",
        type: "ItemLotReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ParentItemLotReference: {
      type: "TypeItemLotReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ParentItemLotReference",
        type: "ItemLotReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ExpirationDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ExpirationDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "Lot expiration date."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RetestDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RetestDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Retest date and time."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    BestByDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:BestByDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "The date on or before which the lot or sublot is best used."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SellByDate: {
      type: "TypeDateType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SellByDate",
        type: "DateType",
        "xsd:annotation": {
          "xsd:documentation": "The date to have the product sold by."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    CreationDateTime: {
      type: "TypeDateTimeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CreationDateTime",
        type: "DateTimeType",
        "xsd:annotation": {
          "xsd:documentation": "Lot creation date and time"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomShipmentItemLotType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomShipmentItemLotType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeShipmentItemLotType;
Modeler.register(TypeShipmentItemLotType, "TypeShipmentItemLotType");
