var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyAccountContact';

var ElementCustomerPartyAccountContact = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyAccountContact: {
      type: "TypeCustomerPartyAccountContactType",
      wsdlDefinition: {
        name: "CustomerPartyAccountContact",
        type: "CustomerPartyAccountContactType",
        "xsd:annotation": {
          "xsd:documentation": "Contact persons on behalf of this customer Party"
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
	  CustomerPartyAccountContact: {
      type: "TypeCustomerPartyAccountContactType",
      wsdlDefinition: {
        name: "CustomerPartyAccountContact",
        type: "CustomerPartyAccountContactType",
        "xsd:annotation": {
          "xsd:documentation": "Contact persons on behalf of this customer Party"
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyAccountContact;
Modeler.register(ElementCustomerPartyAccountContact, "ElementCustomerPartyAccountContact");
