var Modeler = require("../Modeler.js");
var className = 'ElementPassport';

var ElementPassport = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Passport: {
      type: "TypePassportType",
      wsdlDefinition: {
        name: "Passport",
        type: "PassportType",
        "xsd:annotation": {
          "xsd:documentation": "The concept representing a passport and information on a passport"
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
	  Passport: {
      type: "TypePassportType",
      wsdlDefinition: {
        name: "Passport",
        type: "PassportType",
        "xsd:annotation": {
          "xsd:documentation": "The concept representing a passport and information on a passport"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPassport;
Modeler.register(ElementPassport, "ElementPassport");
