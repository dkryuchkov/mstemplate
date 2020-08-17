var Modeler = require("../Modeler.js");
var className = 'ElementDeleteResponse';

var ElementDeleteResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DeleteResponse: {
      type: "TypeDeleteResponseType",
      wsdlDefinition: {
        name: "DeleteResponse",
        type: "DeleteResponseType",
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
	  DeleteResponse: {
      type: "TypeDeleteResponseType",
      wsdlDefinition: {
        name: "DeleteResponse",
        type: "DeleteResponseType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDeleteResponse;
Modeler.register(ElementDeleteResponse, "ElementDeleteResponse");
