var Modeler = require("../Modeler.js");
var className = 'ElementPaydexNorm';

var ElementPaydexNorm = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PaydexNorm: {
      type: "TypePaydexNormType",
      wsdlDefinition: {
        name: "PaydexNorm",
        type: "PaydexNormType",
        "xsd:annotation": {
          "xsd:documentation": "Paydex norm"
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
	  PaydexNorm: {
      type: "TypePaydexNormType",
      wsdlDefinition: {
        name: "PaydexNorm",
        type: "PaydexNormType",
        "xsd:annotation": {
          "xsd:documentation": "Paydex norm"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPaydexNorm;
Modeler.register(ElementPaydexNorm, "ElementPaydexNorm");
