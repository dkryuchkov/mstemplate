var Modeler = require("../Modeler.js");
var className = 'ElementCreateCustomerParty';

var ElementCreateCustomerParty = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CreateCustomerParty: {
      type: "TypeCreateCustomerPartyType",
      wsdlDefinition: {
        name: "CreateCustomerParty",
        type: "CreateCustomerPartyType",
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
	  CreateCustomerParty: {
      type: "TypeCreateCustomerPartyType",
      wsdlDefinition: {
        name: "CreateCustomerParty",
        type: "CreateCustomerPartyType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCreateCustomerParty;
Modeler.register(ElementCreateCustomerParty, "ElementCreateCustomerParty");
