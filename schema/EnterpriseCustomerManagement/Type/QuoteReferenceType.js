var Modeler = require("../Modeler.js");
var className = 'TypeQuoteReferenceType';

var TypeQuoteReferenceType = function(json, parentObj) {
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
    Custom: {
      type: "TypeCustomQuoteReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomQuoteReferenceType",
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
    Custom: {
      type: "TypeCustomQuoteReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomQuoteReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeQuoteReferenceType;
Modeler.register(TypeQuoteReferenceType, "TypeQuoteReferenceType");
