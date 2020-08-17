var Modeler = require("../Modeler.js");
var className = 'ElementPayeePartyReference';

var ElementPayeePartyReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PayeePartyReference: {
      type: "TypePayeePartyReferenceType",
      wsdlDefinition: {
        name: "PayeePartyReference",
        type: "PayeePartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Party to whom a bill of exchange (such as a check or draft) is made payable"
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
	  PayeePartyReference: {
      type: "TypePayeePartyReferenceType",
      wsdlDefinition: {
        name: "PayeePartyReference",
        type: "PayeePartyReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Party to whom a bill of exchange (such as a check or draft) is made payable"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPayeePartyReference;
Modeler.register(ElementPayeePartyReference, "ElementPayeePartyReference");
