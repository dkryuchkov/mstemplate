var Modeler = require("../Modeler.js");
var className = 'ElementUpdateCustomerPartyList';

var ElementUpdateCustomerPartyList = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  UpdateCustomerPartyList: {
      type: "TypeUpdateCustomerPartyListType",
      wsdlDefinition: {
        name: "UpdateCustomerPartyList",
        type: "UpdateCustomerPartyListType",
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
	  UpdateCustomerPartyList: {
      type: "TypeUpdateCustomerPartyListType",
      wsdlDefinition: {
        name: "UpdateCustomerPartyList",
        type: "UpdateCustomerPartyListType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementUpdateCustomerPartyList;
Modeler.register(ElementUpdateCustomerPartyList, "ElementUpdateCustomerPartyList");
