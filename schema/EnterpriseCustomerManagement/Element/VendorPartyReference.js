var Modeler = require("../Modeler.js");
var className = 'ElementVendorPartyReference';

var ElementVendorPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  VendorPartyReference: {
      type: "TypePartyReferenceType",
      wsdlDefinition: {
        name: "VendorPartyReference",
        type: "PartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "The broker/mediator who acts as on behalf of the customer"
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
	  VendorPartyReference: {
      type: "TypePartyReferenceType",
      wsdlDefinition: {
        name: "VendorPartyReference",
        type: "PartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "The broker/mediator who acts as on behalf of the customer"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementVendorPartyReference;
Modeler.register(ElementVendorPartyReference, "ElementVendorPartyReference");
