var Modeler = require("../Modeler.js");
var className = 'ElementOwnerPartyReference';

var ElementOwnerPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OwnerPartyReference: {
      type: "TypeOwnerPartyReferenceType",
      wsdlDefinition: {
        name: "OwnerPartyReference",
        type: "OwnerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Person, Organization or function that owns a specific process, item or asset"
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
	  OwnerPartyReference: {
      type: "TypeOwnerPartyReferenceType",
      wsdlDefinition: {
        name: "OwnerPartyReference",
        type: "OwnerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Person, Organization or function that owns a specific process, item or asset"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOwnerPartyReference;
Modeler.register(ElementOwnerPartyReference, "ElementOwnerPartyReference");
