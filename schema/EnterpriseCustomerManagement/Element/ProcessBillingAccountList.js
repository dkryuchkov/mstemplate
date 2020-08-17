var Modeler = require("../Modeler.js");
var className = 'ElementProcessBillingAccountList';

var ElementProcessBillingAccountList = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProcessBillingAccountList: {
      type: "TypeProcessBillingAccountListType",
      wsdlDefinition: {
        name: "ProcessBillingAccountList",
        type: "ProcessBillingAccountListType",
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
	  ProcessBillingAccountList: {
      type: "TypeProcessBillingAccountListType",
      wsdlDefinition: {
        name: "ProcessBillingAccountList",
        type: "ProcessBillingAccountListType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProcessBillingAccountList;
Modeler.register(ElementProcessBillingAccountList, "ElementProcessBillingAccountList");
