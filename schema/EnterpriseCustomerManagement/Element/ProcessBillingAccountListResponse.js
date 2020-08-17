var Modeler = require("../Modeler.js");
var className = 'ElementProcessBillingAccountListResponse';

var ElementProcessBillingAccountListResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProcessBillingAccountListResponse: {
      type: "TypeProcessBillingAccountListResponseType",
      wsdlDefinition: {
        name: "ProcessBillingAccountListResponse",
        type: "ProcessBillingAccountListResponseType",
        ns: "WL5G3N1",
        attribute: false
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
	  ProcessBillingAccountListResponse: {
      type: "TypeProcessBillingAccountListResponseType",
      wsdlDefinition: {
        name: "ProcessBillingAccountListResponse",
        type: "ProcessBillingAccountListResponseType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProcessBillingAccountListResponse;
Modeler.register(ElementProcessBillingAccountListResponse, "ElementProcessBillingAccountListResponse");
