var Modeler = require("../Modeler.js");
var className = 'ElementProcessBillingAccountResponse';

var ElementProcessBillingAccountResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProcessBillingAccountResponse: {
      type: "TypeProcessBillingAccountResponseType",
      wsdlDefinition: {
        name: "ProcessBillingAccountResponse",
        type: "ProcessBillingAccountResponseType",
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
	  ProcessBillingAccountResponse: {
      type: "TypeProcessBillingAccountResponseType",
      wsdlDefinition: {
        name: "ProcessBillingAccountResponse",
        type: "ProcessBillingAccountResponseType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProcessBillingAccountResponse;
Modeler.register(ElementProcessBillingAccountResponse, "ElementProcessBillingAccountResponse");
