var Modeler = require("../Modeler.js");
var className = 'ElementProcessBillingAccountListResponseEBM';

var ElementProcessBillingAccountListResponseEBM = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProcessBillingAccountListResponseEBM: {
      type: "TypeProcessBillingAccountListResponseEBMType",
      wsdlDefinition: {
        name: "ProcessBillingAccountListResponseEBM",
        type: "ProcessBillingAccountListResponseEBMType",
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
	  ProcessBillingAccountListResponseEBM: {
      type: "TypeProcessBillingAccountListResponseEBMType",
      wsdlDefinition: {
        name: "ProcessBillingAccountListResponseEBM",
        type: "ProcessBillingAccountListResponseEBMType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProcessBillingAccountListResponseEBM;
Modeler.register(ElementProcessBillingAccountListResponseEBM, "ElementProcessBillingAccountListResponseEBM");
