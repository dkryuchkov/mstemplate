var Modeler = require("../Modeler.js");
var className = 'ElementAccountBalanceSummary';

var ElementAccountBalanceSummary = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AccountBalanceSummary: {
      type: "TypeAccountBalanceSummaryType",
      wsdlDefinition: {
        name: "AccountBalanceSummary",
        type: "AccountBalanceSummaryType",
        "xsd:annotation": {
          "xsd:documentation": "Capture Account Balance Information for the CustomerPartyAccount."
        },
        ns: "WL5G3N1",
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
	  AccountBalanceSummary: {
      type: "TypeAccountBalanceSummaryType",
      wsdlDefinition: {
        name: "AccountBalanceSummary",
        type: "AccountBalanceSummaryType",
        "xsd:annotation": {
          "xsd:documentation": "Capture Account Balance Information for the CustomerPartyAccount."
        },
        ns: "WL5G3N1",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAccountBalanceSummary;
Modeler.register(ElementAccountBalanceSummary, "ElementAccountBalanceSummary");
