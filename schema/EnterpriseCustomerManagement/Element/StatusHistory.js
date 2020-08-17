var Modeler = require("../Modeler.js");
var className = 'ElementStatusHistory';

var ElementStatusHistory = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  StatusHistory: {
      type: "TypeStatusHistoryType",
      wsdlDefinition: {
        name: "StatusHistory",
        type: "StatusHistoryType",
        "xsd:annotation": {
          "xsd:documentation": "A record of status change"
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
	  StatusHistory: {
      type: "TypeStatusHistoryType",
      wsdlDefinition: {
        name: "StatusHistory",
        type: "StatusHistoryType",
        "xsd:annotation": {
          "xsd:documentation": "A record of status change"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementStatusHistory;
Modeler.register(ElementStatusHistory, "ElementStatusHistory");
