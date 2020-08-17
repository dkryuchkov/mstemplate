var Modeler = require("../Modeler.js");
var className = 'ElementRelatedCustomerParty';

var ElementRelatedCustomerParty = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RelatedCustomerParty: {
      type: "TypeRelatedCustomerPartyType",
      wsdlDefinition: {
        name: "RelatedCustomerParty",
        type: "RelatedCustomerPartyType",
        "xsd:annotation": {
          "xsd:documentation": "Relationship between Customer Party"
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
	  RelatedCustomerParty: {
      type: "TypeRelatedCustomerPartyType",
      wsdlDefinition: {
        name: "RelatedCustomerParty",
        type: "RelatedCustomerPartyType",
        "xsd:annotation": {
          "xsd:documentation": "Relationship between Customer Party"
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRelatedCustomerParty;
Modeler.register(ElementRelatedCustomerParty, "ElementRelatedCustomerParty");
