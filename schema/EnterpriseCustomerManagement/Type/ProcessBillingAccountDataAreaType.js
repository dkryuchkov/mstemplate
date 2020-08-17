var Modeler = require("../Modeler.js");
var className = 'TypeProcessBillingAccountDataAreaType';

var TypeProcessBillingAccountDataAreaType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Process: {
      type: "TypeProcessType",
      wsdlDefinition: {
        name: "WL5G3N2:Process",
        type: "ProcessType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ProcessBillingAccount: {
      type: "TypeProcessBillingAccountType",
      wsdlDefinition: {
        name: "WL5G3N1:ProcessBillingAccount",
        type: "ProcessBillingAccountType",
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
	  Process: {
      type: "TypeProcessType",
      wsdlDefinition: {
        name: "WL5G3N2:Process",
        type: "ProcessType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ProcessBillingAccount: {
      type: "TypeProcessBillingAccountType",
      wsdlDefinition: {
        name: "WL5G3N1:ProcessBillingAccount",
        type: "ProcessBillingAccountType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeProcessBillingAccountDataAreaType;
Modeler.register(TypeProcessBillingAccountDataAreaType, "TypeProcessBillingAccountDataAreaType");
