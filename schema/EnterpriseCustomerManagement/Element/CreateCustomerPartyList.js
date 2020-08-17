var Modeler = require("../Modeler.js");
var className = 'ElementCreateCustomerPartyList';

var ElementCreateCustomerPartyList = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CreateCustomerPartyList: {
      type: "TypeCreateCustomerPartyListType",
      wsdlDefinition: {
        name: "CreateCustomerPartyList",
        type: "CreateCustomerPartyListType",
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
	  CreateCustomerPartyList: {
      type: "TypeCreateCustomerPartyListType",
      wsdlDefinition: {
        name: "CreateCustomerPartyList",
        type: "CreateCustomerPartyListType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateCustomerPartyList;
Modeler.register(ElementCreateCustomerPartyList, "ElementCreateCustomerPartyList");
