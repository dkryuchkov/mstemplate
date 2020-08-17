var Modeler = require("../Modeler.js");
var className = 'ElementFailureRisk';

var ElementFailureRisk = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FailureRisk: {
      type: "TypeFailureRiskType",
      wsdlDefinition: {
        name: "FailureRisk",
        type: "FailureRiskType",
        "xsd:annotation": {
          "xsd:documentation": "Failure risk details of the credit rating"
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
	  FailureRisk: {
      type: "TypeFailureRiskType",
      wsdlDefinition: {
        name: "FailureRisk",
        type: "FailureRiskType",
        "xsd:annotation": {
          "xsd:documentation": "Failure risk details of the credit rating"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFailureRisk;
Modeler.register(ElementFailureRisk, "ElementFailureRisk");
