var Modeler = require("../Modeler.js");
var className = 'ElementTaskIdentification';

var ElementTaskIdentification = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TaskIdentification: {
      type: "TypeTaskIdentificationType",
      wsdlDefinition: {
        name: "TaskIdentification",
        type: "TaskIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Task object"
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
	  TaskIdentification: {
      type: "TypeTaskIdentificationType",
      wsdlDefinition: {
        name: "TaskIdentification",
        type: "TaskIdentificationType",
        "xsd:annotation": {
          "xsd:documentation": "Unique identification of a Task object"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTaskIdentification;
Modeler.register(ElementTaskIdentification, "ElementTaskIdentification");
