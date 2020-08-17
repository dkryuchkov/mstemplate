var Modeler = require("../Modeler.js");
var className = 'TypeRequestForQuoteReferenceType';

var TypeRequestForQuoteReferenceType = function(json, parentObj) {
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
    Custom: {
      type: "TypeCustomRequestForQuoteReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomRequestForQuoteReferenceType",
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
    Custom: {
      type: "TypeCustomRequestForQuoteReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomRequestForQuoteReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeRequestForQuoteReferenceType;
Modeler.register(TypeRequestForQuoteReferenceType, "TypeRequestForQuoteReferenceType");
