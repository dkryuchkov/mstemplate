var Modeler = require("../Modeler.js");
var className = 'ElementDeleteCustomerPartyList';

var ElementDeleteCustomerPartyList = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DeleteCustomerPartyList: {
      type: "TypeDeleteCustomerPartyListType",
      wsdlDefinition: {
        name: "DeleteCustomerPartyList",
        type: "DeleteCustomerPartyListType",
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
	  DeleteCustomerPartyList: {
      type: "TypeDeleteCustomerPartyListType",
      wsdlDefinition: {
        name: "DeleteCustomerPartyList",
        type: "DeleteCustomerPartyListType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteCustomerPartyList;
Modeler.register(ElementDeleteCustomerPartyList, "ElementDeleteCustomerPartyList");
