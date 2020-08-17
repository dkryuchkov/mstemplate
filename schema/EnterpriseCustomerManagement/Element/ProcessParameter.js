var Modeler = require("../Modeler.js");
var className = 'ElementProcessParameter';

var ElementProcessParameter = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProcessParameter: {
      type: "TypeProcessParameterType",
      wsdlDefinition: {
        name: "ProcessParameter",
        type: "ProcessParameterType",
        "xsd:annotation": {
          "xsd:documentation": "A process parameter structure allows for a process variable to be defined including its meaning and value range. Once defined the parameter can be reused to describe or contrain a process or other related concept such as resource/machine to be used for the process."
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
	  ProcessParameter: {
      type: "TypeProcessParameterType",
      wsdlDefinition: {
        name: "ProcessParameter",
        type: "ProcessParameterType",
        "xsd:annotation": {
          "xsd:documentation": "A process parameter structure allows for a process variable to be defined including its meaning and value range. Once defined the parameter can be reused to describe or contrain a process or other related concept such as resource/machine to be used for the process."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProcessParameter;
Modeler.register(ElementProcessParameter, "ElementProcessParameter");
