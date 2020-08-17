var Modeler = require("../Modeler.js");
var className = 'ElementTarget';

var ElementTarget = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  Target: {
      type: "TypeTargetType",
      wsdlDefinition: {
        name: "Target",
        type: "TargetType",
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
	  Target: {
      type: "TypeTargetType",
      wsdlDefinition: {
        name: "Target",
        type: "TargetType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementTarget;
Modeler.register(ElementTarget, "ElementTarget");
