var Modeler = require("../Modeler.js");
var className = 'ElementOutsourcerPartyReference';

var ElementOutsourcerPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  OutsourcerPartyReference: {
      type: "TypeOutsourcerPartyReferenceType",
      wsdlDefinition: {
        name: "OutsourcerPartyReference",
        type: "OutsourcerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "This party is an organization who will outsource part or all of their logistic activities to a Logistic Service Provider (LSP)."
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
	  OutsourcerPartyReference: {
      type: "TypeOutsourcerPartyReferenceType",
      wsdlDefinition: {
        name: "OutsourcerPartyReference",
        type: "OutsourcerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "This party is an organization who will outsource part or all of their logistic activities to a Logistic Service Provider (LSP)."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementOutsourcerPartyReference;
Modeler.register(ElementOutsourcerPartyReference, "ElementOutsourcerPartyReference");
