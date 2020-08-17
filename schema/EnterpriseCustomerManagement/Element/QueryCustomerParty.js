var Modeler = require("../Modeler.js");
var className = 'ElementQueryCustomerParty';

var ElementQueryCustomerParty = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  QueryCustomerParty: {
      type: "TypeQueryCustomerPartyType",
      wsdlDefinition: {
        name: "QueryCustomerParty",
        type: "QueryCustomerPartyType",
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
	  QueryCustomerParty: {
      type: "TypeQueryCustomerPartyType",
      wsdlDefinition: {
        name: "QueryCustomerParty",
        type: "QueryCustomerPartyType",
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementQueryCustomerParty;
Modeler.register(ElementQueryCustomerParty, "ElementQueryCustomerParty");
