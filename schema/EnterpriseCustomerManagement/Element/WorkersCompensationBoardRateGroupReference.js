var Modeler = require("../Modeler.js");
var className = 'ElementWorkersCompensationBoardRateGroupReference';

var ElementWorkersCompensationBoardRateGroupReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  WorkersCompensationBoardRateGroupReference: {
      type: "TypeWorkersCompensationBoardRateGroupReferenceType",
      wsdlDefinition: {
        name: "WorkersCompensationBoardRateGroupReference",
        type: "WorkersCompensationBoardRateGroupReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to Workers Compensation Board Rate Group object. Industries may be assigned a rate group for assessment by the Workers Compensation Board, based on the type of industry and the accident/injury level in that industry. This is a reference to that rate group."
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
	  WorkersCompensationBoardRateGroupReference: {
      type: "TypeWorkersCompensationBoardRateGroupReferenceType",
      wsdlDefinition: {
        name: "WorkersCompensationBoardRateGroupReference",
        type: "WorkersCompensationBoardRateGroupReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Reference to Workers Compensation Board Rate Group object. Industries may be assigned a rate group for assessment by the Workers Compensation Board, based on the type of industry and the accident/injury level in that industry. This is a reference to that rate group."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementWorkersCompensationBoardRateGroupReference;
Modeler.register(ElementWorkersCompensationBoardRateGroupReference, "ElementWorkersCompensationBoardRateGroupReference");
