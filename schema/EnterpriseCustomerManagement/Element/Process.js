var Modeler = require("../Modeler.js");
var className = 'ElementProcess';

var ElementProcess = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Process: {
      type: "TypeProcessType",
      wsdlDefinition: {
        name: "Process",
        type: "ProcessType",
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
	  Process: {
      type: "TypeProcessType",
      wsdlDefinition: {
        name: "Process",
        type: "ProcessType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProcess;
Modeler.register(ElementProcess, "ElementProcess");
