var Modeler = require("../Modeler.js");
var className = 'ElementPayer';

var ElementPayer = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Payer: {
      type: "TypePayerType",
      wsdlDefinition: {
        name: "Payer",
        type: "PayerType",
        "xsd:annotation": {
          "xsd:documentation": "This component represents information about an payer of something."
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
	  Payer: {
      type: "TypePayerType",
      wsdlDefinition: {
        name: "Payer",
        type: "PayerType",
        "xsd:annotation": {
          "xsd:documentation": "This component represents information about an payer of something."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPayer;
Modeler.register(ElementPayer, "ElementPayer");
