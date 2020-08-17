var Modeler = require("../Modeler.js");
var className = 'ElementUsanceTimePeriod';

var ElementUsanceTimePeriod = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  UsanceTimePeriod: {
      type: "TypeUsanceTimePeriodType",
      wsdlDefinition: {
        name: "UsanceTimePeriod",
        type: "UsanceTimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "This is the tenor start date and the maturity date (payment date) based on the tenor of the documentary collection.",
          "xsd:appinfo": {
            "ebocontext:BusinessContext": "BankingAndWealthManagement"
          }
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
	  UsanceTimePeriod: {
      type: "TypeUsanceTimePeriodType",
      wsdlDefinition: {
        name: "UsanceTimePeriod",
        type: "UsanceTimePeriodType",
        "xsd:annotation": {
          "xsd:documentation": "This is the tenor start date and the maturity date (payment date) based on the tenor of the documentary collection.",
          "xsd:appinfo": {
            "ebocontext:BusinessContext": "BankingAndWealthManagement"
          }
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementUsanceTimePeriod;
Modeler.register(ElementUsanceTimePeriod, "ElementUsanceTimePeriod");
