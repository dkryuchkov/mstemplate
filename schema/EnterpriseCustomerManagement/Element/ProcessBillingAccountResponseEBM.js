var Modeler = require("../Modeler.js");
var className = 'ElementProcessBillingAccountResponseEBM';

var ElementProcessBillingAccountResponseEBM = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProcessBillingAccountResponseEBM: {
      type: "TypeProcessBillingAccountResponseEBMType",
      wsdlDefinition: {
        name: "ProcessBillingAccountResponseEBM",
        type: "ProcessBillingAccountResponseEBMType",
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
	  ProcessBillingAccountResponseEBM: {
      type: "TypeProcessBillingAccountResponseEBMType",
      wsdlDefinition: {
        name: "ProcessBillingAccountResponseEBM",
        type: "ProcessBillingAccountResponseEBMType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProcessBillingAccountResponseEBM;
Modeler.register(ElementProcessBillingAccountResponseEBM, "ElementProcessBillingAccountResponseEBM");
