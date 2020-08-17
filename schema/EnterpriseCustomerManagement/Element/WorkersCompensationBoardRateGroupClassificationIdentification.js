var Modeler = require("../Modeler.js");
var className = 'ElementWorkersCompensationBoardRateGroupClassificationIdentification';

var ElementWorkersCompensationBoardRateGroupClassificationIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  WorkersCompensationBoardRateGroupClassificationIdentification: {
      type: "TypeWorkersCompensationBoardRateGroupClassificationIdentificationType",
      wsdlDefinition: {
        name: "WorkersCompensationBoardRateGroupClassificationIdentification",
        type: "WorkersCompensationBoardRateGroupClassificationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification to a Workers Compensation Board Rate Group Classification object"
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
	  WorkersCompensationBoardRateGroupClassificationIdentification: {
      type: "TypeWorkersCompensationBoardRateGroupClassificationIdentificationType",
      wsdlDefinition: {
        name: "WorkersCompensationBoardRateGroupClassificationIdentification",
        type: "WorkersCompensationBoardRateGroupClassificationIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification to a Workers Compensation Board Rate Group Classification object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementWorkersCompensationBoardRateGroupClassificationIdentification;
Modeler.register(ElementWorkersCompensationBoardRateGroupClassificationIdentification, "ElementWorkersCompensationBoardRateGroupClassificationIdentification");
