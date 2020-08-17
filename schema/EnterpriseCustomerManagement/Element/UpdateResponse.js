var Modeler = require("../Modeler.js");
var className = 'ElementUpdateResponse';

var ElementUpdateResponse = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  UpdateResponse: {
      type: "TypeUpdateResponseType",
      wsdlDefinition: {
        name: "UpdateResponse",
        type: "UpdateResponseType",
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
	  UpdateResponse: {
      type: "TypeUpdateResponseType",
      wsdlDefinition: {
        name: "UpdateResponse",
        type: "UpdateResponseType",
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementUpdateResponse;
Modeler.register(ElementUpdateResponse, "ElementUpdateResponse");
