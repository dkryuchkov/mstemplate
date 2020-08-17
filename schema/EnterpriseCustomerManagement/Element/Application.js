var Modeler = require("../Modeler.js");
var className = 'ElementApplication';

var ElementApplication = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Application: {
      type: "TypeApplicationType",
      wsdlDefinition: {
        name: "Application",
        type: "ApplicationType",
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
	  Application: {
      type: "TypeApplicationType",
      wsdlDefinition: {
        name: "Application",
        type: "ApplicationType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementApplication;
Modeler.register(ElementApplication, "ElementApplication");
