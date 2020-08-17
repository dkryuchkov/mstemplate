var Modeler = require("../Modeler.js");
var className = 'ElementAuditHistory';

var ElementAuditHistory = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  AuditHistory: {
      type: "TypeAuditHistoryType",
      wsdlDefinition: {
        name: "AuditHistory",
        type: "AuditHistoryType",
        "xsd:annotation": {
          "xsd:documentation": "A record of the Audit History"
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
	  AuditHistory: {
      type: "TypeAuditHistoryType",
      wsdlDefinition: {
        name: "AuditHistory",
        type: "AuditHistoryType",
        "xsd:annotation": {
          "xsd:documentation": "A record of the Audit History"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementAuditHistory;
Modeler.register(ElementAuditHistory, "ElementAuditHistory");
