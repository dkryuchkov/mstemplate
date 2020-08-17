var Modeler = require("../Modeler.js");
var className = 'ElementFundReference';

var ElementFundReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FundReference: {
      type: "TypeFundReferenceType",
      wsdlDefinition: {
        name: "FundReference",
        type: "FundReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "The fund from where the promotion amount is being released"
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
	  FundReference: {
      type: "TypeFundReferenceType",
      wsdlDefinition: {
        name: "FundReference",
        type: "FundReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "The fund from where the promotion amount is being released"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFundReference;
Modeler.register(ElementFundReference, "ElementFundReference");
