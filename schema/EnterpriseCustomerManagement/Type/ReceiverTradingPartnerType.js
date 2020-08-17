var Modeler = require("../Modeler.js");
var className = 'TypeReceiverTradingPartnerType';

var TypeReceiverTradingPartnerType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TradingPartnerID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:TradingPartnerID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "The identification of a B2B trading partner understood across enterprises involved in B2B transactions. The unbounded cardinality of the ID is to support the possibility of different identifier standards used in different applications. For example, DUNS as well as Employer Identification Number (EIN, assigned by the IRS) can be used to identify a business. DUNS may be used in financial applications while EIN may be used in the tax application for a single B2B transaction."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomReceiverTradingPartnerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomReceiverTradingPartnerType",
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
	  TradingPartnerID: {
      type: "TypeIdentifierType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:TradingPartnerID",
        type: "IdentifierType",
        "xsd:annotation": {
          "xsd:documentation": "The identification of a B2B trading partner understood across enterprises involved in B2B transactions. The unbounded cardinality of the ID is to support the possibility of different identifier standards used in different applications. For example, DUNS as well as Employer Identification Number (EIN, assigned by the IRS) can be used to identify a business. DUNS may be used in financial applications while EIN may be used in the tax application for a single B2B transaction."
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    Custom: {
      type: "TypeCustomReceiverTradingPartnerType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomReceiverTradingPartnerType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeReceiverTradingPartnerType;
Modeler.register(TypeReceiverTradingPartnerType, "TypeReceiverTradingPartnerType");
