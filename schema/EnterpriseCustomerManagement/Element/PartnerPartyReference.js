var Modeler = require("../Modeler.js");
var className = 'ElementPartnerPartyReference';

var ElementPartnerPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PartnerPartyReference: {
      type: "TypePartnerPartyReferenceType",
      wsdlDefinition: {
        name: "PartnerPartyReference",
        type: "PartnerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A Party who shares benefits, risks, etc. in a business collaboration or transaction"
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
	  PartnerPartyReference: {
      type: "TypePartnerPartyReferenceType",
      wsdlDefinition: {
        name: "PartnerPartyReference",
        type: "PartnerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "A Party who shares benefits, risks, etc. in a business collaboration or transaction"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPartnerPartyReference;
Modeler.register(ElementPartnerPartyReference, "ElementPartnerPartyReference");
