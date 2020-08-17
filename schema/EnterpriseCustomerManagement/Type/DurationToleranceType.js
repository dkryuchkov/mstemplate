var Modeler = require("../Modeler.js");
var className = 'TypeDurationToleranceType';

var TypeDurationToleranceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  UnderDuration: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:UnderDuration",
        type: "DurationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OverDuration: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OverDuration",
        type: "DurationType",
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
	  UnderDuration: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:UnderDuration",
        type: "DurationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    OverDuration: {
      type: "TypeDurationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:OverDuration",
        type: "DurationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeDurationToleranceType;
Modeler.register(TypeDurationToleranceType, "TypeDurationToleranceType");
