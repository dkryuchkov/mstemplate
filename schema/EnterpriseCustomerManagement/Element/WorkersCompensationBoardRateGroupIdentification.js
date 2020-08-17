var Modeler = require("../Modeler.js");
var className = 'ElementWorkersCompensationBoardRateGroupIdentification';

var ElementWorkersCompensationBoardRateGroupIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  WorkersCompensationBoardRateGroupIdentification: {
      type: "TypeWorkersCompensationBoardRateGroupIdentificationType",
      wsdlDefinition: {
        name: "WorkersCompensationBoardRateGroupIdentification",
        type: "WorkersCompensationBoardRateGroupIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification to a Workers Compensation Board Rate Group"
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
	  WorkersCompensationBoardRateGroupIdentification: {
      type: "TypeWorkersCompensationBoardRateGroupIdentificationType",
      wsdlDefinition: {
        name: "WorkersCompensationBoardRateGroupIdentification",
        type: "WorkersCompensationBoardRateGroupIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification to a Workers Compensation Board Rate Group"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementWorkersCompensationBoardRateGroupIdentification;
Modeler.register(ElementWorkersCompensationBoardRateGroupIdentification, "ElementWorkersCompensationBoardRateGroupIdentification");
