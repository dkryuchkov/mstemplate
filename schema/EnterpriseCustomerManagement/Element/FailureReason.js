var Modeler = require("../Modeler.js");
var className = 'ElementFailureReason';

var ElementFailureReason = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  FailureReason: {
      type: "TypeFailureReasonType",
      wsdlDefinition: {
        name: "FailureReason",
        type: "FailureReasonType",
        "xsd:annotation": {
          "xsd:documentation": "Assessment code of why the asset failed or went down.  Usually filled out when the repair takes place on the Work Order.  Examples include erosion, freezing, lubrication failure, cavitation."
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
	  FailureReason: {
      type: "TypeFailureReasonType",
      wsdlDefinition: {
        name: "FailureReason",
        type: "FailureReasonType",
        "xsd:annotation": {
          "xsd:documentation": "Assessment code of why the asset failed or went down.  Usually filled out when the repair takes place on the Work Order.  Examples include erosion, freezing, lubrication failure, cavitation."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementFailureReason;
Modeler.register(ElementFailureReason, "ElementFailureReason");
