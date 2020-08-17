var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyReference';

var ElementCustomerPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyReference: {
      type: "TypeCustomerPartyReferenceType",
      wsdlDefinition: {
        name: "CustomerPartyReference",
        type: "CustomerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A CustomerParty represents a persons or organizations which have a buying relationship with the organization that is defining gthe customer. A CustomerParty can have one or more Accounts with the selling organization, such as a personal account, business account, and so forth. An Account is created once a party makes a purchase or establishes a financial agreement with the deploying organization. The combination of a party and its account(s) is considered a customer"
        },
        ns: "WL5G3N2",
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
	  CustomerPartyReference: {
      type: "TypeCustomerPartyReferenceType",
      wsdlDefinition: {
        name: "CustomerPartyReference",
        type: "CustomerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A CustomerParty represents a persons or organizations which have a buying relationship with the organization that is defining gthe customer. A CustomerParty can have one or more Accounts with the selling organization, such as a personal account, business account, and so forth. An Account is created once a party makes a purchase or establishes a financial agreement with the deploying organization. The combination of a party and its account(s) is considered a customer"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyReference;
Modeler.register(ElementCustomerPartyReference, "ElementCustomerPartyReference");
