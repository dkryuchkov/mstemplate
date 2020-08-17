var Modeler = require("../Modeler.js");
var className = 'ElementVisa';

var ElementVisa = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Visa: {
      type: "TypeVisaType",
      wsdlDefinition: {
        name: "Visa",
        type: "VisaType",
        "xsd:annotation": {
          "xsd:documentation": "The concept representing a visa and information appearing on a visa"
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
	  Visa: {
      type: "TypeVisaType",
      wsdlDefinition: {
        name: "Visa",
        type: "VisaType",
        "xsd:annotation": {
          "xsd:documentation": "The concept representing a visa and information appearing on a visa"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementVisa;
Modeler.register(ElementVisa, "ElementVisa");
