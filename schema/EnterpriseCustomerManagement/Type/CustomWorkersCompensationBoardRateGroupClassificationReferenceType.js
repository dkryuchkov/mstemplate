var Modeler = require("../Modeler.js");
var className = 'TypeCustomWorkersCompensationBoardRateGroupClassificationReferenceType';

var TypeCustomWorkersCompensationBoardRateGroupClassificationReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomWorkersCompensationBoardRateGroupClassificationReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomWorkersCompensationBoardRateGroupClassificationReferenceType",
        attribute: false,
        type: "xsd:string"
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
	  CustomWorkersCompensationBoardRateGroupClassificationReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomWorkersCompensationBoardRateGroupClassificationReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomWorkersCompensationBoardRateGroupClassificationReferenceType;
Modeler.register(TypeCustomWorkersCompensationBoardRateGroupClassificationReferenceType, "TypeCustomWorkersCompensationBoardRateGroupClassificationReferenceType");
