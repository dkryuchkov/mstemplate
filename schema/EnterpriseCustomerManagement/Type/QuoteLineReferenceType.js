var Modeler = require("../Modeler.js");
var className = 'TypeQuoteLineReferenceType';

var TypeQuoteLineReferenceType = function(json, parentObj) {
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
    Custom: {
      type: "TypeCustomQuoteLineReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomQuoteLineReferenceType",
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
    Custom: {
      type: "TypeCustomQuoteLineReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomQuoteLineReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeQuoteLineReferenceType;
Modeler.register(TypeQuoteLineReferenceType, "TypeQuoteLineReferenceType");
