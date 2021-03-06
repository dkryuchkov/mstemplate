var Modeler = require("../Modeler.js");
var className = 'TypeRequestForQuoteLineReferenceType';

var TypeRequestForQuoteLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RequestForQuoteIdentification: {
      type: "TypeRequestForQuoteIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RequestForQuoteIdentification",
        type: "RequestForQuoteIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RequestForQuoteLineIdentification: {
      type: "TypeRequestForQuoteLineIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RequestForQuoteLineIdentification",
        type: "RequestForQuoteLineIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomRequestForQuoteLineReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomRequestForQuoteLineReferenceType",
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
	  RequestForQuoteIdentification: {
      type: "TypeRequestForQuoteIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RequestForQuoteIdentification",
        type: "RequestForQuoteIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    RequestForQuoteLineIdentification: {
      type: "TypeRequestForQuoteLineIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:RequestForQuoteLineIdentification",
        type: "RequestForQuoteLineIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomRequestForQuoteLineReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomRequestForQuoteLineReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeRequestForQuoteLineReferenceType;
Modeler.register(TypeRequestForQuoteLineReferenceType, "TypeRequestForQuoteLineReferenceType");
