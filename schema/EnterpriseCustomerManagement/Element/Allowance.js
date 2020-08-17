var Modeler = require("../Modeler.js");
var className = 'ElementAllowance';

var ElementAllowance = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Allowance: {
      type: "TypeAllowanceType",
      wsdlDefinition: {
        name: "Allowance",
        type: "AllowanceType",
        "xsd:annotation": {
          "xsd:documentation": "A component of pricing that decreases the value of a price"
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
	  Allowance: {
      type: "TypeAllowanceType",
      wsdlDefinition: {
        name: "Allowance",
        type: "AllowanceType",
        "xsd:annotation": {
          "xsd:documentation": "A component of pricing that decreases the value of a price"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAllowance;
Modeler.register(ElementAllowance, "ElementAllowance");
