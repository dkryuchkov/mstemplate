var Modeler = require("../Modeler.js");
var className = 'TypeShipmentSetType';

var TypeShipmentSetType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SetID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SetID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "A unique ID indicating to which Shipment Set the containing entitiy belongs"
        },
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
          "xsd:documentation": "Name of the Shipment Set"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomShipmentSetType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomShipmentSetType",
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
	  SetID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SetID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "A unique ID indicating to which Shipment Set the containing entitiy belongs"
        },
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
          "xsd:documentation": "Name of the Shipment Set"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomShipmentSetType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomShipmentSetType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeShipmentSetType;
Modeler.register(TypeShipmentSetType, "TypeShipmentSetType");
