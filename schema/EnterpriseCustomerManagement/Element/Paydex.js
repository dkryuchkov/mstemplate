var Modeler = require("../Modeler.js");
var className = 'ElementPaydex';

var ElementPaydex = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Paydex: {
      type: "TypePaydexType",
      wsdlDefinition: {
        name: "Paydex",
        type: "PaydexType",
        "xsd:annotation": {
          "xsd:documentation": "Paydex details of the credit rating"
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
	  Paydex: {
      type: "TypePaydexType",
      wsdlDefinition: {
        name: "Paydex",
        type: "PaydexType",
        "xsd:annotation": {
          "xsd:documentation": "Paydex details of the credit rating"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPaydex;
Modeler.register(ElementPaydex, "ElementPaydex");
