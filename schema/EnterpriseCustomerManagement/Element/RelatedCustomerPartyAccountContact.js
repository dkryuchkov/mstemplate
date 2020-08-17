var Modeler = require("../Modeler.js");
var className = 'ElementRelatedCustomerPartyAccountContact';

var ElementRelatedCustomerPartyAccountContact = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RelatedCustomerPartyAccountContact: {
      type: "TypeRelatedCustomerPartyAccountContactType",
      wsdlDefinition: {
        name: "RelatedCustomerPartyAccountContact",
        type: "RelatedCustomerPartyAccountContactType",
        "xsd:annotation": {
          "xsd:documentation": "Credit cards of the Contact"
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
	  RelatedCustomerPartyAccountContact: {
      type: "TypeRelatedCustomerPartyAccountContactType",
      wsdlDefinition: {
        name: "RelatedCustomerPartyAccountContact",
        type: "RelatedCustomerPartyAccountContactType",
        "xsd:annotation": {
          "xsd:documentation": "Credit cards of the Contact"
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRelatedCustomerPartyAccountContact;
Modeler.register(ElementRelatedCustomerPartyAccountContact, "ElementRelatedCustomerPartyAccountContact");
