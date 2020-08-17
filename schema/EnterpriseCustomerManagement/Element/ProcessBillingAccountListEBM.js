var Modeler = require("../Modeler.js");
var className = 'ElementProcessBillingAccountListEBM';

var ElementProcessBillingAccountListEBM = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProcessBillingAccountListEBM: {
      type: "TypeProcessBillingAccountListEBMType",
      wsdlDefinition: {
        name: "ProcessBillingAccountListEBM",
        type: "ProcessBillingAccountListEBMType",
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
	  ProcessBillingAccountListEBM: {
      type: "TypeProcessBillingAccountListEBMType",
      wsdlDefinition: {
        name: "ProcessBillingAccountListEBM",
        type: "ProcessBillingAccountListEBMType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProcessBillingAccountListEBM;
Modeler.register(ElementProcessBillingAccountListEBM, "ElementProcessBillingAccountListEBM");
