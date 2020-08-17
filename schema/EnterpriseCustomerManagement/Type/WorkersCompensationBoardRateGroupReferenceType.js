var Modeler = require("../Modeler.js");
var className = 'TypeWorkersCompensationBoardRateGroupReferenceType';

var TypeWorkersCompensationBoardRateGroupReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  WorkersCompensationBoardRateGroupIdentification: {
      type: "TypeWorkersCompensationBoardRateGroupIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WorkersCompensationBoardRateGroupIdentification",
        type: "WorkersCompensationBoardRateGroupIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomWorkersCompensationBoardRateGroupReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomWorkersCompensationBoardRateGroupReferenceType",
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
	  WorkersCompensationBoardRateGroupIdentification: {
      type: "TypeWorkersCompensationBoardRateGroupIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:WorkersCompensationBoardRateGroupIdentification",
        type: "WorkersCompensationBoardRateGroupIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomWorkersCompensationBoardRateGroupReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomWorkersCompensationBoardRateGroupReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeWorkersCompensationBoardRateGroupReferenceType;
Modeler.register(TypeWorkersCompensationBoardRateGroupReferenceType, "TypeWorkersCompensationBoardRateGroupReferenceType");
