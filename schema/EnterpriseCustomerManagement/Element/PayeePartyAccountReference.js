var Modeler = require("../Modeler.js");
var className = 'ElementPayeePartyAccountReference';

var ElementPayeePartyAccountReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PayeePartyAccountReference: {
      type: "TypePayeePartyAccountReferenceType",
      wsdlDefinition: {
        name: "PayeePartyAccountReference",
        type: "PayeePartyAccountReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to an account of a party to which payment will be remitted"
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
	  PayeePartyAccountReference: {
      type: "TypePayeePartyAccountReferenceType",
      wsdlDefinition: {
        name: "PayeePartyAccountReference",
        type: "PayeePartyAccountReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to an account of a party to which payment will be remitted"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPayeePartyAccountReference;
Modeler.register(ElementPayeePartyAccountReference, "ElementPayeePartyAccountReference");
