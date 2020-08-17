var Modeler = require("../Modeler.js");
var className = 'TypeItemInstanceRangeType';

var TypeItemInstanceRangeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  StartingSerialNumberID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:StartingSerialNumberID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "The first serial number of the item in the range (inclusive)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EndingSerialNumberID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EndingSerialNumberID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "The last serial number of the item in the range (inclusive)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomItemInstanceRangeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomItemInstanceRangeType",
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
	  StartingSerialNumberID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:StartingSerialNumberID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "The first serial number of the item in the range (inclusive)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    EndingSerialNumberID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:EndingSerialNumberID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "The last serial number of the item in the range (inclusive)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomItemInstanceRangeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomItemInstanceRangeType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeItemInstanceRangeType;
Modeler.register(TypeItemInstanceRangeType, "TypeItemInstanceRangeType");
