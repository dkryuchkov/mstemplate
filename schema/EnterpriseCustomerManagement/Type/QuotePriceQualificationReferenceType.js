var Modeler = require("../Modeler.js");
var className = 'TypeQuotePriceQualificationReferenceType';

var TypeQuotePriceQualificationReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  QuoteIdentification: {
      type: "TypeQuoteIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:QuoteIdentification",
        type: "QuoteIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    QuoteLineIdentification: {
      type: "TypeQuoteLineIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:QuoteLineIdentification",
        type: "QuoteLineIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    QuotePriceQualificationIdentification: {
      type: "TypeQuotePriceQualificationIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:QuotePriceQualificationIdentification",
        type: "QuotePriceQualificationIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomQuotePriceQualificationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomQuotePriceQualificationReferenceType",
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
	  QuoteIdentification: {
      type: "TypeQuoteIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:QuoteIdentification",
        type: "QuoteIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    QuoteLineIdentification: {
      type: "TypeQuoteLineIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:QuoteLineIdentification",
        type: "QuoteLineIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    QuotePriceQualificationIdentification: {
      type: "TypeQuotePriceQualificationIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:QuotePriceQualificationIdentification",
        type: "QuotePriceQualificationIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomQuotePriceQualificationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomQuotePriceQualificationReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeQuotePriceQualificationReferenceType;
Modeler.register(TypeQuotePriceQualificationReferenceType, "TypeQuotePriceQualificationReferenceType");
