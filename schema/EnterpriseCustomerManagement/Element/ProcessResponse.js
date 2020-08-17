var Modeler = require("../Modeler.js");
var className = 'ElementProcessResponse';

var ElementProcessResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ProcessResponse: {
      type: "TypeProcessResponseType",
      wsdlDefinition: {
        name: "ProcessResponse",
        type: "ProcessResponseType",
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
	  ProcessResponse: {
      type: "TypeProcessResponseType",
      wsdlDefinition: {
        name: "ProcessResponse",
        type: "ProcessResponseType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementProcessResponse;
Modeler.register(ElementProcessResponse, "ElementProcessResponse");
