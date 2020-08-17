var Modeler = require("../Modeler.js");
var className = 'ElementPrimaryCustomerPartyAccountReference';

var ElementPrimaryCustomerPartyAccountReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PrimaryCustomerPartyAccountReference: {
      type: "TypeCustomerPartyAccountReferenceType",
      wsdlDefinition: {
        name: "PrimaryCustomerPartyAccountReference",
        type: "CustomerPartyAccountReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the Primary CustomerParty Account"
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
	  PrimaryCustomerPartyAccountReference: {
      type: "TypeCustomerPartyAccountReferenceType",
      wsdlDefinition: {
        name: "PrimaryCustomerPartyAccountReference",
        type: "CustomerPartyAccountReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to the Primary CustomerParty Account"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPrimaryCustomerPartyAccountReference;
Modeler.register(ElementPrimaryCustomerPartyAccountReference, "ElementPrimaryCustomerPartyAccountReference");
