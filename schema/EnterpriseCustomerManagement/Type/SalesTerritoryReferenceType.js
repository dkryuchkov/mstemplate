var Modeler = require("../Modeler.js");
var className = 'TypeSalesTerritoryReferenceType';

var TypeSalesTerritoryReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SalesTerritoryIdentification: {
      type: "TypeSalesTerritoryIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SalesTerritoryIdentification",
        type: "SalesTerritoryIdentificationType",
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
          "xsd:documentation": "Name of the sales territory (e.g. Western US)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Address: {
      type: "TypeAddressType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Address",
        type: "AddressType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomSalesTerritoryReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomSalesTerritoryReferenceType",
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
	  SalesTerritoryIdentification: {
      type: "TypeSalesTerritoryIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SalesTerritoryIdentification",
        type: "SalesTerritoryIdentificationType",
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
          "xsd:documentation": "Name of the sales territory (e.g. Western US)"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Address: {
      type: "TypeAddressType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Address",
        type: "AddressType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomSalesTerritoryReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomSalesTerritoryReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSalesTerritoryReferenceType;
Modeler.register(TypeSalesTerritoryReferenceType, "TypeSalesTerritoryReferenceType");
