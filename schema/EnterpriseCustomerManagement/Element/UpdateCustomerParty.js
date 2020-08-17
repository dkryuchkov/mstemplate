var Modeler = require("../Modeler.js");
var className = 'ElementUpdateCustomerParty';

var ElementUpdateCustomerParty = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  UpdateCustomerParty: {
      type: "TypeUpdateCustomerPartyType",
      wsdlDefinition: {
        name: "UpdateCustomerParty",
        type: "UpdateCustomerPartyType",
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
	  UpdateCustomerParty: {
      type: "TypeUpdateCustomerPartyType",
      wsdlDefinition: {
        name: "UpdateCustomerParty",
        type: "UpdateCustomerPartyType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementUpdateCustomerParty;
Modeler.register(ElementUpdateCustomerParty, "ElementUpdateCustomerParty");
