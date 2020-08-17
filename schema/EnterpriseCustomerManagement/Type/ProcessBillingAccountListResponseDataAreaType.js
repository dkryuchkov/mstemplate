var Modeler = require("../Modeler.js");
var className = 'TypeProcessBillingAccountListResponseDataAreaType';

var TypeProcessBillingAccountListResponseDataAreaType = function(json, parentObj) {
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
    ProcessBillingAccountListResponse: {
      type: "TypeProcessBillingAccountListResponseType",
      wsdlDefinition: {
        name: "WL5G3N1:ProcessBillingAccountListResponse",
        type: "ProcessBillingAccountListResponseType",
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
    ProcessBillingAccountListResponse: {
      type: "TypeProcessBillingAccountListResponseType",
      wsdlDefinition: {
        name: "WL5G3N1:ProcessBillingAccountListResponse",
        type: "ProcessBillingAccountListResponseType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeProcessBillingAccountListResponseDataAreaType;
Modeler.register(TypeProcessBillingAccountListResponseDataAreaType, "TypeProcessBillingAccountListResponseDataAreaType");
