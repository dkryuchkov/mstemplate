var Modeler = require("../Modeler.js");
var className = 'ElementDeleteCustomerParty';

var ElementDeleteCustomerParty = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DeleteCustomerParty: {
      type: "TypeDeleteCustomerPartyType",
      wsdlDefinition: {
        name: "DeleteCustomerParty",
        type: "DeleteCustomerPartyType",
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
	  DeleteCustomerParty: {
      type: "TypeDeleteCustomerPartyType",
      wsdlDefinition: {
        name: "DeleteCustomerParty",
        type: "DeleteCustomerPartyType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteCustomerParty;
Modeler.register(ElementDeleteCustomerParty, "ElementDeleteCustomerParty");
