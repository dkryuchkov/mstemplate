var Modeler = require("../Modeler.js");
var className = 'ElementRelatedCustomerPartyReference';

var ElementRelatedCustomerPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RelatedCustomerPartyReference: {
      type: "TypeCustomerPartyReferenceType",
      wsdlDefinition: {
        name: "RelatedCustomerPartyReference",
        type: "CustomerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to related CustomerParty"
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
	  RelatedCustomerPartyReference: {
      type: "TypeCustomerPartyReferenceType",
      wsdlDefinition: {
        name: "RelatedCustomerPartyReference",
        type: "CustomerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to related CustomerParty"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRelatedCustomerPartyReference;
Modeler.register(ElementRelatedCustomerPartyReference, "ElementRelatedCustomerPartyReference");
