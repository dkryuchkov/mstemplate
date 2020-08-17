var Modeler = require("../Modeler.js");
var className = 'TypeProcessBillingAccountResponseDataAreaType';

var TypeProcessBillingAccountResponseDataAreaType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProcessResponse: {
      type: "TypeProcessResponseType",
      wsdlDefinition: {
        name: "WL5G3N2:ProcessResponse",
        type: "ProcessResponseType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ProcessBillingAccountResponse: {
      type: "TypeProcessBillingAccountResponseType",
      wsdlDefinition: {
        name: "WL5G3N1:ProcessBillingAccountResponse",
        type: "ProcessBillingAccountResponseType",
        attribute: false,
        ns: "WL5G3N1"
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
	  ProcessResponse: {
      type: "TypeProcessResponseType",
      wsdlDefinition: {
        name: "WL5G3N2:ProcessResponse",
        type: "ProcessResponseType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ProcessBillingAccountResponse: {
      type: "TypeProcessBillingAccountResponseType",
      wsdlDefinition: {
        name: "WL5G3N1:ProcessBillingAccountResponse",
        type: "ProcessBillingAccountResponseType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeProcessBillingAccountResponseDataAreaType;
Modeler.register(TypeProcessBillingAccountResponseDataAreaType, "TypeProcessBillingAccountResponseDataAreaType");
