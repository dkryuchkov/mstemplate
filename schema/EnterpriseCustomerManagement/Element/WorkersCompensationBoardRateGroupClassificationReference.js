var Modeler = require("../Modeler.js");
var className = 'ElementWorkersCompensationBoardRateGroupClassificationReference';

var ElementWorkersCompensationBoardRateGroupClassificationReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  WorkersCompensationBoardRateGroupClassificationReference: {
      type: "TypeWorkersCompensationBoardRateGroupClassificationReferenceType",
      wsdlDefinition: {
        name: "WorkersCompensationBoardRateGroupClassificationReference",
        type: "WorkersCompensationBoardRateGroupClassificationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to Workers Compensation Board Rate Group Clasification object. The Workers Compensation Board classifies industries into rate groups. This is a reference to the rate group classification. The classification indicates the industry that applies to a job."
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
	  WorkersCompensationBoardRateGroupClassificationReference: {
      type: "TypeWorkersCompensationBoardRateGroupClassificationReferenceType",
      wsdlDefinition: {
        name: "WorkersCompensationBoardRateGroupClassificationReference",
        type: "WorkersCompensationBoardRateGroupClassificationReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to Workers Compensation Board Rate Group Clasification object. The Workers Compensation Board classifies industries into rate groups. This is a reference to the rate group classification. The classification indicates the industry that applies to a job."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementWorkersCompensationBoardRateGroupClassificationReference;
Modeler.register(ElementWorkersCompensationBoardRateGroupClassificationReference, "ElementWorkersCompensationBoardRateGroupClassificationReference");
