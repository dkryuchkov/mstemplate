var Modeler = require("../Modeler.js");
var className = 'ElementPersonInterest';

var ElementPersonInterest = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PersonInterest: {
      type: "TypePersonInterestType",
      wsdlDefinition: {
        name: "PersonInterest",
        type: "PersonInterestType",
        "xsd:annotation": {
          "xsd:documentation": "Interests of a person"
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
	  PersonInterest: {
      type: "TypePersonInterestType",
      wsdlDefinition: {
        name: "PersonInterest",
        type: "PersonInterestType",
        "xsd:annotation": {
          "xsd:documentation": "Interests of a person"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPersonInterest;
Modeler.register(ElementPersonInterest, "ElementPersonInterest");
