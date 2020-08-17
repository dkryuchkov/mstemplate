var Modeler = require("../Modeler.js");
var className = 'ElementCustomerPartyAccountReference';

var ElementCustomerPartyAccountReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyAccountReference: {
      type: "TypeCustomerPartyAccountReferenceType",
      wsdlDefinition: {
        name: "CustomerPartyAccountReference",
        type: "CustomerPartyAccountReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to CustomerParty Account"
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
	  CustomerPartyAccountReference: {
      type: "TypeCustomerPartyAccountReferenceType",
      wsdlDefinition: {
        name: "CustomerPartyAccountReference",
        type: "CustomerPartyAccountReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to CustomerParty Account"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCustomerPartyAccountReference;
Modeler.register(ElementCustomerPartyAccountReference, "ElementCustomerPartyAccountReference");
