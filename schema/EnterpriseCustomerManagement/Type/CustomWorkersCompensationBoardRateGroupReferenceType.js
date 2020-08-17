var Modeler = require("../Modeler.js");
var className = 'TypeCustomWorkersCompensationBoardRateGroupReferenceType';

var TypeCustomWorkersCompensationBoardRateGroupReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomWorkersCompensationBoardRateGroupReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomWorkersCompensationBoardRateGroupReferenceType",
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
	  CustomWorkersCompensationBoardRateGroupReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomWorkersCompensationBoardRateGroupReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomWorkersCompensationBoardRateGroupReferenceType;
Modeler.register(TypeCustomWorkersCompensationBoardRateGroupReferenceType, "TypeCustomWorkersCompensationBoardRateGroupReferenceType");
