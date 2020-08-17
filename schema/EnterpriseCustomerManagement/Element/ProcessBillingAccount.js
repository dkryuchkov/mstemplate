var Modeler = require("../Modeler.js");
var className = 'ElementProcessBillingAccount';

var ElementProcessBillingAccount = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProcessBillingAccount: {
      type: "TypeProcessBillingAccountType",
      wsdlDefinition: {
        name: "ProcessBillingAccount",
        type: "ProcessBillingAccountType",
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
	  ProcessBillingAccount: {
      type: "TypeProcessBillingAccountType",
      wsdlDefinition: {
        name: "ProcessBillingAccount",
        type: "ProcessBillingAccountType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProcessBillingAccount;
Modeler.register(ElementProcessBillingAccount, "ElementProcessBillingAccount");
