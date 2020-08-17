var Modeler = require("../Modeler.js");
var className = 'ElementEFT';

var ElementEFT = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EFT: {
      type: "TypeEFTType",
      wsdlDefinition: {
        name: "EFT",
        type: "EFTType",
        "xsd:annotation": {
          "xsd:documentation": "Any transfer of funds that is initiated by electronic means, such as an electronic terminal, telephone, computer etc"
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
	  EFT: {
      type: "TypeEFTType",
      wsdlDefinition: {
        name: "EFT",
        type: "EFTType",
        "xsd:annotation": {
          "xsd:documentation": "Any transfer of funds that is initiated by electronic means, such as an electronic terminal, telephone, computer etc"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementEFT;
Modeler.register(ElementEFT, "ElementEFT");
