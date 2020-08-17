var Modeler = require("../Modeler.js");
var className = 'ElementMandateSignerPartyReference';

var ElementMandateSignerPartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  MandateSignerPartyReference: {
      type: "TypeMandateSignerPartyReferenceType",
      wsdlDefinition: {
        name: "MandateSignerPartyReference",
        type: "MandateSignerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Party that provides instructions and authorizes the transfer of funds in a bank payment"
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
	  MandateSignerPartyReference: {
      type: "TypeMandateSignerPartyReferenceType",
      wsdlDefinition: {
        name: "MandateSignerPartyReference",
        type: "MandateSignerPartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Party that provides instructions and authorizes the transfer of funds in a bank payment"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementMandateSignerPartyReference;
Modeler.register(ElementMandateSignerPartyReference, "ElementMandateSignerPartyReference");
