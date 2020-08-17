var Modeler = require("../Modeler.js");
var className = 'ElementRelatedCustomerPartyAccount';

var ElementRelatedCustomerPartyAccount = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RelatedCustomerPartyAccount: {
      type: "TypeRelatedCustomerPartyAccountType",
      wsdlDefinition: {
        name: "RelatedCustomerPartyAccount",
        type: "RelatedCustomerPartyAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Other Customer Party accounts that are related to this Customer Party account and hence can act as proxy for this Customer Party account."
        },
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
	  RelatedCustomerPartyAccount: {
      type: "TypeRelatedCustomerPartyAccountType",
      wsdlDefinition: {
        name: "RelatedCustomerPartyAccount",
        type: "RelatedCustomerPartyAccountType",
        "xsd:annotation": {
          "xsd:documentation": "Other Customer Party accounts that are related to this Customer Party account and hence can act as proxy for this Customer Party account."
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRelatedCustomerPartyAccount;
Modeler.register(ElementRelatedCustomerPartyAccount, "ElementRelatedCustomerPartyAccount");
