var Modeler = require("../Modeler.js");
var className = 'ElementProcessCustomerPartyList';

var ElementProcessCustomerPartyList = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProcessCustomerPartyList: {
      type: "TypeProcessCustomerPartyListType",
      wsdlDefinition: {
        name: "ProcessCustomerPartyList",
        type: "ProcessCustomerPartyListType",
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
	  ProcessCustomerPartyList: {
      type: "TypeProcessCustomerPartyListType",
      wsdlDefinition: {
        name: "ProcessCustomerPartyList",
        type: "ProcessCustomerPartyListType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProcessCustomerPartyList;
Modeler.register(ElementProcessCustomerPartyList, "ElementProcessCustomerPartyList");
