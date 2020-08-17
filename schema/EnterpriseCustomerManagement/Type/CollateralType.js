var Modeler = require("../Modeler.js");
var className = 'TypeCollateralType';

var TypeCollateralType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CollateralID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CollateralID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Identifier of a collateral."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Type of collateral/asset attached to the line of credit, e.g., Security, Fixed Deposits etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Amount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Amount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Value of the collateral/asset"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCollateralType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomCollateralType",
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
	  CollateralID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:CollateralID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "Identifier of a collateral."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    TypeCode: {
      type: "TypeCodeType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TypeCode",
        type: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "Type of collateral/asset attached to the line of credit, e.g., Security, Fixed Deposits etc."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Amount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Amount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Value of the collateral/asset"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomCollateralType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomCollateralType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCollateralType;
Modeler.register(TypeCollateralType, "TypeCollateralType");
