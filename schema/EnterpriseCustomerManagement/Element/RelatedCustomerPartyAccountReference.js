var Modeler = require("../Modeler.js");
var className = 'ElementRelatedCustomerPartyAccountReference';

var ElementRelatedCustomerPartyAccountReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  RelatedCustomerPartyAccountReference: {
      type: "TypeCustomerPartyAccountReferenceType",
      wsdlDefinition: {
        name: "RelatedCustomerPartyAccountReference",
        type: "CustomerPartyAccountReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a related CustomerPartyAccount"
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
	  RelatedCustomerPartyAccountReference: {
      type: "TypeCustomerPartyAccountReferenceType",
      wsdlDefinition: {
        name: "RelatedCustomerPartyAccountReference",
        type: "CustomerPartyAccountReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to a related CustomerPartyAccount"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementRelatedCustomerPartyAccountReference;
Modeler.register(ElementRelatedCustomerPartyAccountReference, "ElementRelatedCustomerPartyAccountReference");
