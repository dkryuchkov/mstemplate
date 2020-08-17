var Modeler = require("../Modeler.js");
var className = 'TypePartyRelatedHouseholdPartyType';

var TypePartyRelatedHouseholdPartyType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  HouseholdPartyReference: {
      type: "TypeHouseholdPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:HouseholdPartyReference",
        type: "HouseholdPartyReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    NetWorthAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:NetWorthAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Net worth of the household.",
          "xsd:appinfo": {
            "ebocontext:DerivedBusinessContext": {
              "ebocontext:BusinessContext": "BankingAndWealthManagement",
              "ebocontext:DerivationTypeCode": "Extension"
            }
          }
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ManagedAssetAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ManagedAssetAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Total Assets under Management for the household. The assets of the members which are part of group and managed at the group level. The members can have other assets which are not in part of group and it will be manged by member themselves.",
          "xsd:appinfo": {
            "ebocontext:DerivedBusinessContext": {
              "ebocontext:BusinessContext": "BankingAndWealthManagement",
              "ebocontext:DerivationTypeCode": "Extension"
            }
          }
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPartyRelatedHouseholdPartyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPartyRelatedHouseholdPartyType",
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
	  HouseholdPartyReference: {
      type: "TypeHouseholdPartyReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:HouseholdPartyReference",
        type: "HouseholdPartyReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    NetWorthAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:NetWorthAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Net worth of the household.",
          "xsd:appinfo": {
            "ebocontext:DerivedBusinessContext": {
              "ebocontext:BusinessContext": "BankingAndWealthManagement",
              "ebocontext:DerivationTypeCode": "Extension"
            }
          }
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ManagedAssetAmount: {
      type: "TypeAmountType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ManagedAssetAmount",
        type: "AmountType",
        "xsd:annotation": {
          "xsd:documentation": "Total Assets under Management for the household. The assets of the members which are part of group and managed at the group level. The members can have other assets which are not in part of group and it will be manged by member themselves.",
          "xsd:appinfo": {
            "ebocontext:DerivedBusinessContext": {
              "ebocontext:BusinessContext": "BankingAndWealthManagement",
              "ebocontext:DerivationTypeCode": "Extension"
            }
          }
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPartyRelatedHouseholdPartyType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPartyRelatedHouseholdPartyType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePartyRelatedHouseholdPartyType;
Modeler.register(TypePartyRelatedHouseholdPartyType, "TypePartyRelatedHouseholdPartyType");
