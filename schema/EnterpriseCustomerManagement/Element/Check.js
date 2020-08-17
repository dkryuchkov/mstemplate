var Modeler = require("../Modeler.js");
var className = 'ElementCheck';

var ElementCheck = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Check: {
      type: "TypeCheckType",
      wsdlDefinition: {
        name: "Check",
        type: "CheckType",
        "xsd:annotation": {
          "xsd:documentation": "A check is a negotiable instrument instructing a financial institution to pay a specific amount of a specific currency from a specific demand account held in the payer/depositor's name with that institution"
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
	  Check: {
      type: "TypeCheckType",
      wsdlDefinition: {
        name: "Check",
        type: "CheckType",
        "xsd:annotation": {
          "xsd:documentation": "A check is a negotiable instrument instructing a financial institution to pay a specific amount of a specific currency from a specific demand account held in the payer/depositor's name with that institution"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementCheck;
Modeler.register(ElementCheck, "ElementCheck");
