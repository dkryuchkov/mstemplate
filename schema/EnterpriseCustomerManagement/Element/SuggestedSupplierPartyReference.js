var Modeler = require("../Modeler.js");
var className = 'ElementSuggestedSupplierPartyReference';

var ElementSuggestedSupplierPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SuggestedSupplierPartyReference: {
      type: "TypeSupplierPartyReferenceType",
      wsdlDefinition: {
        name: "SuggestedSupplierPartyReference",
        type: "SupplierPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A supplier that is suggested by a requester as a possible provider of the goods or services being requested"
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
	  SuggestedSupplierPartyReference: {
      type: "TypeSupplierPartyReferenceType",
      wsdlDefinition: {
        name: "SuggestedSupplierPartyReference",
        type: "SupplierPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A supplier that is suggested by a requester as a possible provider of the goods or services being requested"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSuggestedSupplierPartyReference;
Modeler.register(ElementSuggestedSupplierPartyReference, "ElementSuggestedSupplierPartyReference");
