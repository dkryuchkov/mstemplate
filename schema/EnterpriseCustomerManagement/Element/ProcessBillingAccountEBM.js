var Modeler = require("../Modeler.js");
var className = 'ElementProcessBillingAccountEBM';

var ElementProcessBillingAccountEBM = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProcessBillingAccountEBM: {
      type: "TypeProcessBillingAccountEBMType",
      wsdlDefinition: {
        name: "ProcessBillingAccountEBM",
        type: "ProcessBillingAccountEBMType",
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
	  ProcessBillingAccountEBM: {
      type: "TypeProcessBillingAccountEBMType",
      wsdlDefinition: {
        name: "ProcessBillingAccountEBM",
        type: "ProcessBillingAccountEBMType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProcessBillingAccountEBM;
Modeler.register(ElementProcessBillingAccountEBM, "ElementProcessBillingAccountEBM");
