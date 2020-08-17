var Modeler = require("../Modeler.js");
var className = 'TypeWorkersCompensationBoardRateGroupClassificationReferenceType';

var TypeWorkersCompensationBoardRateGroupClassificationReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  WorkersCompensationBoardRateGroupClassificationIdentification: {
      type: "TypeWorkersCompensationBoardRateGroupClassificationIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WorkersCompensationBoardRateGroupClassificationIdentification",
        type: "WorkersCompensationBoardRateGroupClassificationIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomWorkersCompensationBoardRateGroupClassificationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomWorkersCompensationBoardRateGroupClassificationReferenceType",
        attribute: false,
        ns: "WL5G3N2"
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
        minOccurs: "0",
        name: "WL5G3N2:WorkersCompensationBoardRateGroupClassificationIdentification",
        type: "WorkersCompensationBoardRateGroupClassificationIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomWorkersCompensationBoardRateGroupClassificationReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomWorkersCompensationBoardRateGroupClassificationReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeWorkersCompensationBoardRateGroupClassificationReferenceType;
Modeler.register(TypeWorkersCompensationBoardRateGroupClassificationReferenceType, "TypeWorkersCompensationBoardRateGroupClassificationReferenceType");
