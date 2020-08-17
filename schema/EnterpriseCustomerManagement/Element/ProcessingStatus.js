var Modeler = require("../Modeler.js");
var className = 'ElementProcessingStatus';

var ElementProcessingStatus = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProcessingStatus: {
      type: "TypeStatusType",
      wsdlDefinition: {
        name: "ProcessingStatus",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "Status of the processing of an object or item"
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
	  ProcessingStatus: {
      type: "TypeStatusType",
      wsdlDefinition: {
        name: "ProcessingStatus",
        type: "StatusType",
        "xsd:annotation": {
          "xsd:documentation": "Status of the processing of an object or item"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProcessingStatus;
Modeler.register(ElementProcessingStatus, "ElementProcessingStatus");
