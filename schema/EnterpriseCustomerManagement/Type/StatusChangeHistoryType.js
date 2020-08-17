var Modeler = require("../Modeler.js");
var className = 'TypeStatusChangeHistoryType';

var TypeStatusChangeHistoryType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  StatusHistory: {
      type: "TypeStatusHistoryType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:StatusHistory",
        type: "StatusHistoryType",
        "xsd:annotation": {
          "xsd:documentation": "A record of a status change"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  StatusHistory: {
      type: "TypeStatusHistoryType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        minOccurs: "0",
        name: "WL5G3N2:StatusHistory",
        type: "StatusHistoryType",
        "xsd:annotation": {
          "xsd:documentation": "A record of a status change"
        },
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeStatusChangeHistoryType;
Modeler.register(TypeStatusChangeHistoryType, "TypeStatusChangeHistoryType");
